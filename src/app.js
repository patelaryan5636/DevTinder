const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/adminAuth");

const User= require("./Models/User");

const { connectDb } = require("./config/database");

const app = express();

app.use(express.json());

// middleware for all route error handle
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Cannot be reached out");
});

// get user via email id
app.get("/getuser", async(req,res)=>{
  const getUser = await User.find({email: req.body.email});

  try{
  if(getUser){
    res.send(getUser);
  }else{
    res.status(400).send("user not found");
  }
  }catch(error){
    res.status(500).send("bad Request" + error);
  }
});

// feed api
app.get("/feed",async(req,res)=>{
  
  try{
      const alluser = await User.find({});
      if(alluser.length > 0){
        res.send(alluser);
      }else{
        res.status(400),send("users not in database");
      }
    }catch(error){
      res.status(500).send("bad Request" + error);
    }
})

// delete by email id
app.delete("/user",async(req,res)=>{
  const userid = await User.findOneAndDelete({ email: req.body.email });

  try{
    if(userid){
      res.send("delete successfully");
    }else{
      res.status(401).send("email id not found");
    }
  }catch(error){
    res.status(500).send("bad request" + error);
  }
})

// signup
app.post("/signup",async(req,res)=>{

  const user = new User(req.body);

  try{
    await user.save();
    res.send("data pushed successfully");
  }catch(error){
    res.status(400).send("bad request" + error);
  }
})

// update the user data
app.patch("/user",async(req,res)=>{

   const { userId, firstName, lastName} = req.body;
  
   const UpdateData = {};
   if(firstName) UpdateData.firstName = firstName;
   if(lastName) UpdateData.lastName = lastName;

   console.log(Object.keys(UpdateData));

   if (Object.keys(UpdateData).length === 0) {
     return res.status(400).send("Nothing to update");
   }

   try{
     const updateUser = await User.findByIdAndUpdate(userId,UpdateData,{ new: true, runValidators: true });
     if(updateUser){
      res.send("updated succesfully");
    }else{
      res.status(401).send("id not found");
    }
  }catch(error){
    res.status(500).send("bad request" + error);
  }

});

// connect to the database
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
