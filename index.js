import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT = 4000;

// Root route
app.get("/", (req, res) => {
  res.send(`
    <div style="max-width: 700px; margin: 0 auto; text-align: center;">
      <h1 style="margin-bottom: 20px;">Welcome to the Timestamp API!</h1><br/>
      <ul>
      <p>To create a Text file with the current timestamp, add /createfile endpoint to the Base URL.</p>
      <br/>
      <p>To view the TimeStamp files, add /getAllFiles endpoint to the Base URL.</p><ul>
    </div>
  `);
});

// Api For Creating a Text File With Current time-stamp and write it to the file.

app.get("/createfile", (req, res) => {
  const timestamp = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  console.log("timestamp:", timestamp);
  const filename = `TimeStamp/${timestamp}.txt`;
  try {
    fs.writeFileSync(filename, `${timestamp}`, "utf-8");
    res.status(200).send(`
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="background-color: #d4edda; border-color: #c3e6cb; color: #155724; padding: .75rem 1.25rem; margin-bottom: 20px;">
          File created successfully at ${timestamp}
        </div>
      </div>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send(`
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8d7da; border-color: #f5c6cb; color: #721c24; padding: .75rem 1.25rem; margin-bottom: 20px;">
          Error creating file
        </div>
      </div>
    `);
  }
});

//Api for Retrieving all text files in that Folder

app.get("/getAllFiles", (req, res) => {
  fs.readdir("TimeStamp", (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send(`
        <div style="max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8d7da; border-color: #f5c6cb; color: #721c24; padding: .75rem 1.25rem; margin-bottom: 20px;">
            Error retrieving files
          </div>
        </div>
      `);
    } else {
      const textFiles = files.filter((file) => file.endsWith(".txt"));
      const fileListHTML = textFiles
        .map(
          (file) =>
            `<li style="list-style: none; padding: .5rem;text-align: center;">${file}</li>`
        )
        .join("");
      res.status(200)
        .send(`<h3 style="text-align: center;">TimeStamp files!</h3>
        <div style="max-width: 600px; margin: 0 auto;">
          <ul style="padding-left: 0;text-align: center;">
            ${fileListHTML}
          </ul>
        </div>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
