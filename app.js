var schedule = require('node-schedule');
const API = require('call-of-duty-api')();
const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser')
const cors = require('cors');
// const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// define Schema
var StatsSchema = mongoose.Schema({
  date: Date,
  averageKills: Number
});

var Average = mongoose.model('Average', StatsSchema, 'averageKills');

//Connect to Database
mongoose.connect(config.database);

//On Connecton
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database eroor '+err);
});

const app = express();

const users = require('./routes/users');

//port number
// const port = 3000;
const port = process.env.port || 8080;

//cors middleware
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyPaser.json());

//Passport middleware 
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

app.use('/users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    
});

//start server
app.listen(port, () => {
    console.log('server started on port '+port);
});
// setup scheduler
schedule.scheduleJob('30 * * * * *', function(){
  API.login('emily_p123@hotmail.co.uk', 'N3llytheelephan!').then(() => {
    API.MWstats('v%20reactionz%20x', API.platforms.xbl).then((output) => {
      var kills = output.lifetime.mode.br.properties.kills;
      var games = output.lifetime.mode.br.properties.gamesPlayed;
      var averageKills = kills / games;
      var ak = new Average({ date: Date.now(), averageKills: averageKills });
      ak.save(function (err, averageKills) {
        if (err) return console.error(err);
        console.log(averageKills.averageKills + " saved to collection.");
      });
      // TODO: write average kills to db
      // deploy to see if it works when server isn't running locally
      // draw graph from db data
      console.log(averageKills);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
});
