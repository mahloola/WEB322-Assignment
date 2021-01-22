/********************************************************************************* 
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Mahmoud Bakir // Student ID: 127859197 // Date: January 22nd, 2021
* 
*  Online (Heroku) URL: https://web322-mahmoud.herokuapp.com/
* 
********************************************************************************/  

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Mahmoud Bakir - 127859197");
});

app.listen(process.env.PORT || 5000)