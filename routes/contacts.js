let express = require('express');
let router = express.Router();

let mongoose=require('mongoose');
//Create a reference to the db schema
let contact=require('../models/contact')

//Read
router.get('/', (req,res,next)=>{
    contact.find((err, contactList)=>{
       if(err){
           return console.error(err);
       } 
       else{
           console.log(contactList);
       }
    })
})

module.exports = router;