var EventEmitter = require("events");
var util = require("util");

function Greeter() {
  this.greeting = "Hello";
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function (name) {
  console.log(this.greeting + " " + name);
  this.emit("greet", name);
};

var greeter1 = new Greeter();

greeter1.on("greet", function (name) {
  console.log("Someone greeted " + name);
});

greeter1.greet("Amjad");
