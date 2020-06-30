const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
//enable cookies
app.use(passport.session());
app.use(bodyParser.json());
require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport');
//Routing in production(heroku) environment
if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  // like some specific files such as main.js or main.css file
  app.use(express.static('client/build'));
  //express will serve index.html file
  //if it doesn't recognize the route.
  //assumption is that react router knows what to do with this route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//connect function
mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
