var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
firstname:String,
lastname:String,
username:String,
password:String


);

//: TO DO
// setters
// Getters
// Indexes



//  compile schmema into module
var users=mongoose.model('userSchema',userSchema);