const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
});

app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
