const express = require("express");
const userModel = require("./models");
const app = express();

app.post("/add-frameworks", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    console.log(user);
    response.send(user);
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
});

app.get("/get-frameworks", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
    console.log(users);
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
});

module.exports = app;
