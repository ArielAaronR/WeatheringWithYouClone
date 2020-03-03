const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

/**
 * URI to connect to Atlas Database
 * usedNewUrlParser connection for a flag
 * useCreateIndex connection for a flag deprication
 */
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
require("./config/routes")(app);

app.use(function(req, res, next) {
  if(req.url.match(/.+\/static/)){
      var url = req.url.match(/\/static.*/);
      res.redirect(url[0]);
  }else
      res.status(404).send('Sorry cant find that!');
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
