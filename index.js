var express = require('express');
var app = express();
const config = require('./config.json');

// Add the routers
var frontend = require('./routers/frontend/frontend');
var api = require('./routers/API/api');

// set the view engine to ejs
app.set('view engine', 'ejs')

// Add the public endpoint for images etc.
app.use(express.static('public'))

// Use the routers
app.use('/', frontend)
app.use('/api', api)

try{
  app.listen(config.port)
  console.log(`The server is listening on port ${config.port}`)
}
catch(e){
  console.log(`ERROR! ERROR! \n${e}`)
  console.log('Error! Error! - Fatal. Server not started.')
}