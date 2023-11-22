const routes=require('express').Router();

routes.post("/",(req,res)=>{
   return  res.send("Registered user ")
})
routes.post("/login",(req,res)=>{
    return res.send("login successfully")
})
module.exports=routes;
