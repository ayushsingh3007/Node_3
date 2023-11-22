const fs=require("fs")///it is inbuilt module known as file system module

fs.writeFileSync("text.txt","hi i am there")
fs.appendFileSync("text.txt"," this is new through append file sync")
///for reading the data
const data=fs.readFileSync("text.txt")
console.log(data.toString())