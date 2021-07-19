"use strict";

let EventEmitter = require("events");

class Greeter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    console.log(`${this.greeting} ${name}`);
    this.emit("greet", name);
  }
}

module.exports = Greeter;
