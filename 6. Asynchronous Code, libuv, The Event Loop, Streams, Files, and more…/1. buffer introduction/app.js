let buffer = new Buffer("Hello", "utf8");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("wo");
console.log(buffer.toString());
