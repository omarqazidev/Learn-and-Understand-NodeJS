const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

let urlencodedParser = express.urlencoded({ extended: false });
let jsonParser = express.json();

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
  res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
});

app.post("/person", urlencodedParser, (req, res) => {
  res.send("Thank you!");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post("/personjson", jsonParser, (req, res) => {
  res.send("Thank you for the JSON data!");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
