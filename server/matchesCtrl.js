exports.getAllMatches = (req, res, next) => {
  req.app.get('db').getAllMatches().then(function (matches) {
    res.status(200).send(matches);
  }).catch(err => console.log(err))
}

exports.getMatchesByUserID = (req, res) => {
  req.app.get('db').getMatches(req.params.id).then(matches => {
    const uniqueIDs = []
    const all = []
    //get all unique user id'set
    matches.map((elem, i) => {
      uniqueIDs.includes(matches[i].user_1) ? null : uniqueIDs.push(matches[i].user_1);
      uniqueIDs.includes(matches[i].user_2) ? null : uniqueIDs.push(matches[i].user_2);
    })
    //get user profiles
    const allProfiles = []
    let sendProfile = (arr) => {
      let b = arr.pop()
      req.app.get('db').getProfile(b).then(profile => {
        allProfiles.push(profile[0])
        if (arr.length > 0) sendProfile(arr)
        else {
          all.push(matches)
          all.push(allProfiles)
          res.status(200).send(all)
        }
      })
    }
    sendProfile(uniqueIDs)
  })
}

//Create a match
exports.createMatch = (req, res) => {
  //get all records from matches
  req.app.get('db').getAllFromMatches().then(allMatches => {
    const myID = req.params.id
    let u1 = req.body.user_1
    let u2 = req.body.user_2
    let theirID
    let counter = 0
    myID == u1 ? theirID = u2 : theirID = u1
    for (let i = 0; i < allMatches.length; i++) {
      if (allMatches[i].user_1 === theirID || allMatches[i].user_2 === theirID) {
        counter++
        return req.app.get('db').customMatchQuery(myID, u1, u2).then(response => {
          for (let i = 0; i < response.length; i++) {
            if (response[i].user_1 === theirID && response[i].matched === true || response[i].user_2 === theirID && response[i].matched === true) {
              // Do Nothing
              return res.status(501).send(`Users are already matched`)
            }
            else if (response[i].user_1 === theirID || response[i].user_2 === theirID) {
              //PUT
              req.app.get('db').updateMatch(response[i].id).then(newMatch => {
                res.status(200).send(`Updated match record with the id of: ${response[i].id}`)
              }).catch(err => res.status(500).send(err))
            }
          }
        })
      }
      else {
        counter++
        if (counter > 0 && counter === allMatches.length) {
          //create a new record
          req.app.get('db').createMatches(myID, theirID).then(newMatchRecord => {
            res.status(200).send(`new match record was created successfully`)
          }).catch(err => res.status(500).send(err))
        }
        else return res.status(200).send(`Profile was already liked`)
      }
    }
    res.status(200)
  }).catch(err => res.status(500).send(err))
}