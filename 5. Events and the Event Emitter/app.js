"use strict";

let Greeter = require("./greeter");

let greeter = new Greeter();

greeter.on("greet", function (name) {
  console.log(`Someone greeted ${name}`);
});

greeter.greet("Amjad");
