const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //invoked everytime, user asks for a get request
  res.status(200).send('Home Page'); // but express does it automatically - 200
});

app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})

app.all('*', (req, res) => {
    res.status(404).send("Page not found");
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen