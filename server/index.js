const express = require('express');
const routes  = require('../routes');

//setup express app
const app = express();

//settings
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: false }));

//routes
app.use('/', routes.home);

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
