const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/style.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //   console.log(req.method); -> GET
  //   console.log(req.url); -> /about
  const url = req.url;
  console.log(url);

  //home page
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); //mime type
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" }); //mime type
    res.write("<h1>About Page</h1>");
    res.end();
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" }); //mime type
    res.write(homeStyles);
    res.end();
  }
  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" }); //mime type
    res.write(homeImage);
    res.end();
  }
  //JS
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" }); //mime type
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server listening to port : ${port}`);
});
