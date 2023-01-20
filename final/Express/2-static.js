const express = require("express");
const path = require("path");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"))});
// No need to add this, as index.html in the public folder is the root

//setup static and middleware
//asset that server doesn't need to change
app.use(express.static("./public"));

app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
