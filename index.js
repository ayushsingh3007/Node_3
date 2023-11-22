const http=require('http');
let obj={
    "name":"ayush singh"
}
 
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("hi this data is comes without using any tag")
        res.end()
    }
    else if(req.url==="/post"){
        res.write("<h1>this data is creted by using h1 tag</h1>")
        res.end()
    }
    else if(req.url==="/json"){
        const jsonobj=JSON.stringify(obj)
        res.write(jsonobj)
        res.end()
        

    }

}).listen(3000,()=>{
    console.log("server is running on port")
   
})
