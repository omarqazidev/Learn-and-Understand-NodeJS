const express = require("express");

let urlencodedParser = express.urlencoded({ extended: false });
let jsonParser = express.json();

module.exports = function (app) {
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
};
