let mongoose=require('mongoose');

//Create model  class
let contactSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports=mongoose.model('contact', contactSchema);