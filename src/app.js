const express = require("express");

const {adminAuth, userAuth} = require("../middlewares/adminAuth");
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Cannot be reached out");
});

app.get("/user/login",(req,res)=>{
  res.send("login successfully");
})

app.use("/admin",adminAuth);

app.use("/user",userAuth);

app.get("/admin/getdata",function(req,res){
    res.send("data successfully send ");
  });

app.get("/user/userdata",function(req,res){
  res.send("data successfuully send to the user");
})

app.listen(7777,()=>{
  console.log("connect ");
});