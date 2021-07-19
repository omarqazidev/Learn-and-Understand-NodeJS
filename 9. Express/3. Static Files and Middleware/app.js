const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use("/assets", express.static(`${__dirname}/public`));

app.use("/", (req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>"
  );
});

app.get("/person/:id", (req, res) => {
  res.send(
    `<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`
  );
});

app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
