'use strict';

const express       = require('express');
const routes        = require('../routes');
const dotenv        = require('dotenv');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');

//use dotenv
dotenv.config({
  silent: true,
});

//setup express app
const app = express();

//logger
app.use(logger('combined'));

//settings
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());

//routes
app.use('/', routes.home);
app.use('/', routes.contact);

// set our port
app.set('port', process.env.PORT || 3000);

// setup our static route to serve files from the "public" folder
app.use('/static', express.static('public'));


//404 error
app.use((req, res, next) => {
    let err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

//error page
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      status: err.status
  });
});

// start listening on our port
const server = app.listen(app.get('port'), function() {
  console.log('Express server is listening on port ' + server.address().port);
});
