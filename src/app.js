const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
  res.send("hello from aryan patel");
});

app.listen(7777,()=>{
  console.log("connect ");
});