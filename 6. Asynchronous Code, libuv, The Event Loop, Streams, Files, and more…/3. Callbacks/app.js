function greet(callback) {
  console.log("Hello!");

  let data = {
    name: "John Doe",
  };

  callback(data);
}

greet(function (data) {
  console.log("callback was invoked!");
  console.log(`Hi ${data.name}!`);
});

greet(function (data) {
  console.log("a different callback was invoked!");
  console.log(`What's up ${data.name}!`);
});
