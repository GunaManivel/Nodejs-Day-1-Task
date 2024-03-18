# Node.js File System API

This project implements a simple Node.js API for creating and retrieving text files using the Node.js File System module (fs) and the Express framework.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed
  
### Installation

1. Clone the repository :
   
```bash
git clone https://github.com/GunaManivel/Nodejs-Day-1-Task.git
```

2. Navigate to the project directory:
 
```bash
cd Nodejs Day 1 Task
```

3. Install dependencies:

```bash
npm install
```

### Running the Server

 **Start the Express server :**

```bash
npm start
```
By default, the server runs on port 4000. You can change this in the `index.js` file.

## API Endpoints

**1. Root Route**

- **Endpoint** : /
  
- **Method** : GET
  
- **Description** : Displays a welcome message.
  
- **Response** : "Welcome to the Timestamp API!"

**2. Create Text File**

- **Endpoint** : /createfile
 
- **Method**: GET
  
- **Description** : Creates a text file with the current timestamp in the TimeStamp folder.
  
- **Response** : 200 OK if successful, 500 Internal Server Error if an error occurs.
  
**3. Retrieve All Text Files**

- **Endpoint** : /getAllFiles
  
- **Method** : GET
  
- **Description** : Retrieves all text files in the TimeStamp folder.
 
- **Response** : An array of filenames (strings) if successful, 500 Internal Server Error if an error occurs.
  
## Usage

1. Use a tool like Postman to send requests to the API endpoints:

- Send a `GET` request to `/ `to see the welcome message.
- Send a `POST` request to `/createfile` to create a text file.
- Send a `GET` request to `/getAllFiles` to retrieve all text files.
  
1. Check the console for server logs.

## Folder Structure

  ```diff
    Nodejs Day 1 Task/
│
├── Timestamp/          # Folder to store text files
│
├── node_modules/       # Folder containing installed dependencies
│
├── index.js            # Entry point for the application
│
├── package.json        # Project metadata and dependencies
│
└── package-lock.json   # Version-locked dependencies (auto-generated)
```

## Built With
- Node.js
- Express
- date-fns

## Author

Guna Manivel

## License

- This project is licensed under the MIT License - see the LICENSE file for details.