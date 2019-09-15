const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');


//local imports
const {config} = require('./database/database');
const index = require('./routes/index');


var app = express();

mongoose.connect(config, {
    useUnifiedTopology: true,useNewUrlParser: true
});
const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Database Connection Established Successfully.');
});

conn.on('error', (err) => {
    console.log('Unable to Connect to Database. ' + err);
});

var Port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials',
}));
app.set('view engine', '.hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 300000
    }
}));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg'); 
    next();
  });

app.use('/', index);

app.listen(Port, ()=>{
console.log('App Is Listening On Port 3000');
});