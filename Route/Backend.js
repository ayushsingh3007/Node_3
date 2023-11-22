const backend=require('express').Router()

backend.get("/",(req,res)=>{
    return res.send("backend data is there ")
})
module.exports=backend;