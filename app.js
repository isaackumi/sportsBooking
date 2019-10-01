var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var express = require('express');
var hbs=require('express-handlebars');
var path=require('path');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var app=express();
var port=3000;

// Include external routes
var index=require('./Routes/index.js');


 
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => {
  console.log('connected to database');  
}).catch((err) => {
   console.log('Database connection error.');
});

// Middlewares
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
// view engine setup
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);


app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});

// Export app for test
module.exports=app;