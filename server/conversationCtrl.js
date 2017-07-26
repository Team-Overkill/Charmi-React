exports.getConversations = (req, res, next) => {
  req.app.get('db').getConversation().then(function (conversations) {
    res.status(200).send(conversations);
  }).catch(err => console.log(err))
}

exports.createConv = (req, res) => {
  let Arr = [req.body.user_1, req.body.user_2]
  req.app.get('db').createConversation(Arr).then(response => {
    res.status(200).send(response)
  }).catch(err => console.log(err))
}

// get conversation by id
exports.getConversationByID = (req, res) => {
  req.app.get('db').getMessagesByConID(req.params.id).then(response => {
    if (response.length === 0) {
      res.status(200).send(`this conversation doesn't exist`)
    }
    else {
      res.status(200).send(response)
    }
  }).catch(err => console.log(err))
}

exports.createNewMessage = (req, res) => {
  let timestamp = new Date()
  let Arr = [
    req.body.message
    , timestamp
    , req.body.conversation_id
    , req.body.user_id
  ]
  req.app.get('db').createMessage(Arr).then(response => {
    res.status(200).send(response)
  }).catch(err => console.log(err))
}

// get conversation by users
exports.conversationByUserIDs = (req, res) => {
  console.log(req.body.user_1, req.body.user_2)
  req.app.get('db').getUserConversations(req.body.user_1, req.body.user_2).then(convID => {
    if (!convID.length) {
      req.app.get('db').createConversation(req.body.user_1, req.body.user_2).then(response => {
        res.status(200).send(`${JSON.stringify(response[0].id)}`)
      }).catch(err => console.log(err))
    }
    else {
      console.log(convID)
      res.status(200).send(convID)
    }
  })
}