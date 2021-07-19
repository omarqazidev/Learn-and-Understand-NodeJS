//IMPORTS
const express = require("express");
const apiController = require("./controllers/apiController");
const htmlController = require("./controllers/htmlController");

//APP SETUP
const app = express();
const port = process.env.PORT || 3000;

//STATIC MIDDLEWARE SETUP
app.use("/assets", express.static(`${__dirname}/public`));

//TEMPLATE ENGINE SETUP
app.set("view engine", "ejs");

//CUSTOM MIDDLEWARE
app.use("/", (req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
});

//ATTACHING CONTROLLERS
htmlController(app);
apiController(app);

//LISTENING
app.listen(port);
