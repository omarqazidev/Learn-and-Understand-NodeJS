"use strict";

let http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      let obj = {
        firstname: "John",
        lastname: "Doe",
      };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(1337, "localhost");
