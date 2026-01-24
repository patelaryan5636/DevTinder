const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/adminAuth");

const User= require("./Models/User");

const { connectDb } = require("./config/database");

const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Cannot be reached out");
});

app.get("/getuser", async(req,res)=>{
  const getUser = await User.find({email: req.body.email});

  try{
  if(getUser){
    res.send(getUser);
  }else{
    res.status(400).send("user not found");
  }
  }catch(error){
    res.status(500).send("bad Request");
  }
});

app.get("/feed",async(req,res)=>{
    const alluser = await User.find({});

    try{
      if(alluser.length > 0){
        res.send(alluser);
      }else{
        res.status(400),send("users not in database");
      }
    }catch(error){
      res.status(500).send("bad Request");
    }
})

app.delete("/user",async(req,res)=>{
  const userid = await User.findOneAndDelete({ email: req.body.email });

  try{
    if(userid){
      res.send("delete successfully");
    }else{
      res.status(401).send("email id not found");
    }
  }catch(error){
    res.status(500).send("bad request");
  }
})

app.post("/signup",async(req,res)=>{

  const user = new User(req.body);

  try{
    await user.save();
    res.send("data pushed successfully");
  }catch(error){
    res.status(400).send("bad request");
  }
})

app.patch("/user",async(req,res)=>{

   const { userId, ...data } = req.body; 

   try{
     const updateUser = await User.findByIdAndUpdate(userId,data);
     if(updateUser){
      res.send("updated succesfully");
    }else{
      res.status(401).send("id not found");
    }
  }catch(error){
    res.status(500).send("bad request");
  }

});

connectDb()
  .then(function () {
    console.log("connection was successfullt established");
    app.listen(7777, () => {
      console.log("server is running succesfully");
    });
  })
  .catch(function (err) {
    console.error("connection was not established");
  });
