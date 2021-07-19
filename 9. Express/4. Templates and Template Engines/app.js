const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use("/assets", express.static(`${__dirname}/public`));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id });
});

app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
