const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


dotenv.config({ path:'config.env'})
const PORT = process.env.PORT||8080

//log request
app.use(morgan('tiny'));

//pass requst to body-parser 
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.get('/',(req,res)=>{
    res.send("Crud Application");
})

app.listen(3000, ()=> {console.log(`Server is running pn http://localhost:${PORT}`)});