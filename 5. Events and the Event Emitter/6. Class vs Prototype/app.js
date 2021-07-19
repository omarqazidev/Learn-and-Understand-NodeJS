"use strict";

//Class OOP

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

let john = new Person("John", "Doe");
john.greet();

//Prototype OOP

function PPerson(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PPerson.prototype.greet = function () {
  console.log("Hello " + this.firstName + " " + this.lastName);
};

let jane = new PPerson("Jane", "Doe");
jane.greet();
