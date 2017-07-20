const express = require('express')
  , session = require('express-session')
  , passport = require('passport')
  , Auth0Strategy = require('passport-auth0')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , massive = require('massive')
  , matchesCtrl = require('./server/matchesCtrl')
  , conversationCtrl = require('./server/conversationCtrl')
  , profilesCtrl = require('./server/profilesCtrl')
  , config = require('./config')
  // , remoteUrl = 'https://charmi-server.herokuapp.com'
  , app = express();

app.set('port', process.env.PORT || 3005)

app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


//Local
massive(config.dbURLString).then(db => {
  app.set('db', db)
  console.log(`connected to db`)
});

//Online
// massive(process.env.connectionString).then(function (db) {
//   app.set('db', db)
//   console.log(`connected to db`)
// });

passport.use(new Auth0Strategy({
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL: '/api/auth/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db')
    db.getUserByAuthId(profile.id).then(user => {
      user = user[0];
      if (!user) {
        console.log(profile)
        console.log('Creating user...');
        db.createUserByAuth([profile.id, profile.name.givenName])
          .then(user => {
            console.log('User created...');
            return done(null, user[0]);
          })
      } else {
        console.log('Found user...', user);
        return done(null, user);
      }
    })
  }
));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function (userA, done) {
  console.log('Serializing user...', userA);
  var userB = userA;
  //Things you might do here :
  //Serialize just the id, get other information to add to session,
  done(null, userB); //PUTS 'USER' ON THE SESSION
});

// USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT

passport.deserializeUser(function (userB, done) {
  var userC = userB;
  // app.get('db').getUserAndFavs(userC.authid).then(function (favorites){
    // userC.favorites = favorites;
    done(null, userC);
//move done() inside of promise .then or else it will fire before it gets a response
//   })
});

app.get('/api/auth', passport.authenticate('auth0'));


app.get('/api/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/browse' //frontend port
  }),
  function (req, res) {

    res.status(200).send(req.user);
  })

app.get('/api/auth/me', function (req, res) {
  if (!req.user) return res.sendStatus(404);
  //THIS IS WHATEVER VALUE WE GOT FROM userC variable above.
  res.status(200).send(req.user);
})

app.get('/api/auth/logout', function (req, res) {
  req.logout();
  res.redirect('/');
})


app.get('/api/matches', matchesCtrl.getAllMatches);
app.get('/api/conversations', conversationCtrl.getConversations);
app.get('/api/profiles', profilesCtrl.getProfiles);
app.get('/api/states', profilesCtrl.getStates);
app.get('/api/profiles/:id', profilesCtrl.getProfileByID);

//create profile
app.post('/api/profile/default', profilesCtrl.createDefaultProfile);

//Update profile
app.put('/api/profile/:id', profilesCtrl.updateProfileByID);
//sample req.obj:
const reqObj = {
  "first_name": "Sarah"
  , "age": 27
  , "height": "5ft 8in"
  , "home_town": "Provo"
  , "home_state_id": "Utah"
  , "geolocation": "40.2732624,-111.7051887"
  , "about": "English, Health economist, (very) part-time PhD student, trainer enthusiast."
  , "work": "ASHEcon"
  , "school": "U of U"
  , "relationship_readiness": 8
  , "age_range": "25-35"
  , "search_location_radius": 10
  , "search_hometown": true
  , "primary_photo": "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"
  , "auth_token": "owiejfww"
  , "gender": "Female"
}

//Create Conversation
app.post('/api/conversations', conversationCtrl.createConv);
//sample req.obj
const conv = {
  "user_1": 1
  , "user_2": 6
}
//Post a message
app.post('/api/conversations/message', conversationCtrl.createNewMessage)
//sample req.obj
const mes = {
  "message": "hello"
  , "conversation_id": 5
  , "user_id": 1
}
//get all messages in a conversation
app.get('/api/conversations/:id', conversationCtrl.getConversationByID)

//create a match
app.post('/api/matches/:id', matchesCtrl.createMatch)
//sample req.obj
const mat = {
  "user_1": 1
  , "user_2": 3
}


// app.listen(process.env.PORT || port, function () {
//   console.log(`Listening on port ${this.address().port}...`)
// })

app.listen(app.get('port'), () => {
  console.log('listening on: ', app.get('port'))
})

// app.listen(port, function () {
//   console.log(`Listening on port ${this.address().port}...`)
// })