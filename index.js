var express = require('express');
var app = express();
const config = require('./config.json')

// set the view engine to ejs
app.set('view engine', 'ejs');

// Add the public endpoint for images etc.
app.use(express.static('public'))


// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

try{
  app.listen(config.port)
  console.log(`The server is listening on port ${config.port}`)
}
catch(e){
  console.log(`ERROR! ERROR! \n${e}`)
  console.log('Error! Error! - Fatal. Server not started.')
}