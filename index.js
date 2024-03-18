import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT = 4000;

// Api For Creating a Text File With Current time-stamp and write it to the file.

app.post("/createfile", (req, res) => {
  const timestamp = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  console.log("timestamp:", timestamp);
  const filename = `TimeStamp/${timestamp}.txt`;
  try {
    fs.writeFileSync(filename, `${timestamp}`, "utf-8");
    res.status(200).send("File created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating file");
  }
});

//Api for Retrieving all text files in that Folder

app.get("/getAllFiles", (req, res) => {
  fs.readdir("Timestamp", (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving files");
    } else {
      const textFiles = files.filter((file) => file.endsWith(".txt"));
      res.status(200).json(textFiles);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
