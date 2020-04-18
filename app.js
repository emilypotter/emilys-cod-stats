const express = require('express');
const cors = require('cors')
var schedule = require('node-schedule');
const app = express();
const users = require('./routes/users');
const API = require('call-of-duty-api')();

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
schedule.scheduleJob('05 * * * * *', function(){
  API.login('emily_p123@hotmail.co.uk', 'N3llytheelephan!').then(() => {
    API.MWstats('v%20reactionz%20x', API.platforms.xbl).then((output) => {
      var kills = output.lifetime.mode.br.properties.kills;
      var games = output.lifetime.mode.br.properties.gamesPlayed;
      var averageKills = kills / games;
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
