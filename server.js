const express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , massive = require('massive')
  , matchesCtrl = require('./server/matchesCtrl')
  , conversationCtrl = require('./server/conversationCtrl')
  , profilesCtrl = require('./server/profilesCtrl')
  , config = require('./config')
  // , remoteUrl = 'https://charmi-server.herokuapp.com'
  , port = 3005
  // , io = require('socket.io')
  , app = express();


app.use(bodyParser.json());
app.use(cors());

//Local
massive(config.dbURLString).then(function (db) {
  app.set('db', db)
  console.log(`connected to db`)
});
//Online
// massive(process.env.connectionString).then(function (db) {
//   app.set('db', db)
//   console.log(`connected to db`)
// });


// app.get('https://charmi-server.herokuapp.com/matches', matchesCtrl.getAllMatches);
// app.get('https://charmi-server.herokuapp.com/conversations', conversationCtrl.getConversations);
// app.get('https://charmi-server.herokuapp.com/profiles', profilesCtrl.getProfiles);

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
  , "user_2" : 6
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
  "user_1" : 1
  , "user_2" : 3
}



// sockets setup 

// io.on('connection', socket => {
//   console.log('A user connected')

//   socket.on('user_connected', data => {
//     socket.broadcast.emit('user_connected', { data })
//     socket.emit('user_connected', { data })
//   })
// })





// app.listen(process.env.PORT || port, function () {
//   console.log(`Listening on port ${this.address().port}...`)
// })

app.listen(port, function () {
  console.log(`Listening on port ${this.address().port}...`)
})