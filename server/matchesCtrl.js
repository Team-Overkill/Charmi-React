exports.getAllMatches = (req, res, next) => {
  req.app.get('db').getAllMatches().then(function (matches) {
    res.status(200).send(matches);
  }).catch(err => console.log(err))
}

exports.getMatchesByUserID = (req, res) => {

}

//Create a match
exports.createMatch = (req, res) => {
  console.log(`logged in user = ${req.params.id}`)
  //get all records from matches
  req.app.get('db').getAllFromMatches().then(allMatches => {
    console.log(allMatches[2].user_1)
    let myID = req.params.id
    for (let i = 0; i < allMatches.length; i++) {
      console.log(allMatches[i])
      if (allMatches[i].user_1 === myID || allMatches[i].user_2 === myID) {
        console.log(`you exist`)
        
        // req.app.get('db').customMatchQuery(req.params.id, req.body.user_1, req.body.user_2).then(response => {
        // })
      }
    }

  })
  // req.app.get('db').createMatches(req.body.user_1, req.body.user_2).then(matches => {
  //   res.status(200).send(matches);
  // }).catch(err => console.log(err))
}