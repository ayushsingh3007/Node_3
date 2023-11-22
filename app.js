const express = require('express');
const app = express();
const route = express.Router();


const middleware1 = (req, res, next) => {
    console.log("Middleware 1 applied to all routes");
    
    next();
};


const middleware2 = (req, res, next) => {
    console.log("Middleware 2 applied to /home and /courses routes")
    next();
};


route.get("/about", middleware1, (req, res) => {
    res.send("About page");
});

route.get("/home", middleware1, middleware2, (req, res) => {
    res.send("Home page");
});

route.get("/contact", middleware1, (req, res) => {
    res.send("Contact page");
});

route.get("/courses", middleware1, middleware2, (req, res) => {
    res.send("Courses page");
});

app.use('/', route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



// Application level middleware: means it is applicable to all the routes or to all the endpoints 
// // app.use("you will pass middleware function name")
// // routing level middleware or specific middleware   it means that we are applying th middleware in a specific route
//                 // app.get("url path", middleware function,callback function)
// // thirdparty middleware// you have to use third party module which will have the functio