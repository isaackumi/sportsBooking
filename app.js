var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var express = require('express');
var hbs=require('express-handlebars');
var path=require('path');
var logger
var app=express();
var port=3000;

var index=require('./Routes/index.js');

// Middlewares
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
// view engine setup
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);


app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});

// Export app for test
module.exports=app;