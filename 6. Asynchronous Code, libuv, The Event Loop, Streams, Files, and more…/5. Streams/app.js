let fs = require("fs");

let readable = fs.createReadStream(`${__dirname}/greet.txt`, {
  encoding: "utf8",
  highWaterMark: 16 * 1024,
});

let writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);

readable.on("data", function (chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});
