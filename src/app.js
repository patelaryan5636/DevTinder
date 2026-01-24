const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/adminAuth");

const User= require("./Models/User");

const { connectDb } = require("./config/database");

const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Cannot be reached out");
});

app.post("/signup",async(req,res)=>{
  const userObj = {
    firstName: "aryan",
    lastName: "patel",
    emailId: "sachaniaryan675@gmail.com",
    gender: "male",
    age: 17,
  }
  const user = new User(userObj);

  try{
    await user.save();
    res.send("data pushed successfully");
  }catch(error){
    res.status(400).send("bad request");
  }
})

connectDb()
  .then(function () {
    console.log("connection was successfullt established");
    app.listen(7777, () => {
      console.log("sever is running succesfully");
    });
  })
  .catch(function (err) {
    console.error("connection was not established");
  });
