const express = require('express');
const cors = require('cors')
var schedule = require('node-schedule');
const app = express();
const users = require('./routes/users');

//port number
const port = 3000;

// CORS middleware
app.use(cors());

app.use('/users', users);

// index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// start server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

// setup scheduler
schedule.scheduleJob('42 * * * * *', function(){
  console.log('Hi');
});
