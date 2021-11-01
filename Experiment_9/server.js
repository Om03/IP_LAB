const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://mcdaddy12:bacefook12@cluster001.g3ew6.mongodb.net/gimmeaname?authSource=admin&replicaSet=atlas-13p4rv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
