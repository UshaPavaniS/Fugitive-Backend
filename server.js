// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const fugitiveRoutes = require('./routes/route.js'); 
const envFile = require('dotenv').config();

if (envFile.error) {
  // This error should crash whole process
 console.table(
     {
        "file"       : "server.js",
        "description": "Error while reading .env file",
        "error"      : envFile.error
      }
  );
  return;
}
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
console.log("triggered");
app.use('/', fugitiveRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
