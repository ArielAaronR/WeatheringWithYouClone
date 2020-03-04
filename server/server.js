const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");




const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



/**
 * URI to connect to Atlas Database
 * usedNewUrlParser connection for a flag
 * useCreateIndex connection for a flag deprication
 */
mongoose.connect("mongodb://localhost/weatherdb",{ useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("./config/routes");


app.use(express.static( '../build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html')); // relative path
    });


app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});