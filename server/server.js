const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require routes here
const recipeRoutes = require("./routes/recipeRoutes");

//calling middleware to log network activity
const { logger, authenticate } = require('../server/middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());

//logger here to keep track of network activity
 app.use(logger);
 app.use(authenticate);

//app.use( all api routes) here
app.use("/recipes", recipeRoutes);

//general
app.use(express.static(path.join(__dirname, "../build")));

//general
app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port} :D`);
});