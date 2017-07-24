exports.getStates = (req, res) => req.app.get('db').getStates().then(states => res.status(200).send(states))

exports.getProfiles = (req, res, next) => {
  req.app.get('db').getProfiles().then(profiles => {
    res.status(200).send(profiles);
  }).catch(err => console.log(err))
}

exports.getProfileByID = (req, res) => req.app.get('db').getProfile(req.params.id).then(singleProfile => res.status(200).send(singleProfile)).catch(err => console.log(err))

exports.createDefaultProfile = (req, res, next) => {
  req.app.get('db').createDefaultProfile().then(profileID => {
    res.status(200).send(profileID);
  }).catch(err => console.log(err))
}

exports.updateProfileByID = (req, res, next) => {
  let rb = req.body
  let state = rb.home_state_id

  req.app.get('db').getStateNameByID(state).then(stateID => {
    let sID = stateID[0].id
    let dbArr = [
      req.params.id
      , rb.first_name
      , rb.age
      , rb.height
      , rb.home_town
      , sID
      , rb.geolocation
      , rb.about
      , rb.work
      , rb.school
      , rb.relationship_readiness
      , rb.age_range
      , rb.search_location_radius
      , rb.search_hometown
      , rb.primary_photo
      , rb.auth_token
      , rb.gender
    ]
    console.log(dbArr)
    req.app.get('db').updateProfile(dbArr).then(profile => {
      res.status(200).send(`profile = ${dbArr}`);
    }).catch(err => console.log(err))
  })
}

exports.blockUserByID = (req, res) => {
  let them = req.params.id /1
  let me = req.body.myUserID /1
  //is blocked user me?
  if (them !== me) {
    //is blocked user already blocked?
    req.app.get('db').getMyBlockedUsers(me, them).then(mbplist => {
      let themArr = []
      for (let i = 0; i < mbplist.length; i++) {
        themArr.push(mbplist[i].blocked_user_id)
      }
      let theirID = themArr.indexOf(them)
      if (theirID === -1){
        req.app.get('db').createNewBlockedUser(me, them).then(resp => {
          res.status(200).send(`User with the ID of ${them} has been blocked`)
        }).catch(err => console.log(err))
      }
      else{return res.status(200).send(`User is already blocked`)}
    }).catch(err => console.log(err))
  }
  else {return res.status(200).send(`You cannot block yourself`)}
}

exports.getMyBlockedUsersByID = (req, res) => {
  req.app.get('db').getMyBlockedUsers(req.body.myUserID, req.params.id).then(blockedProfiles => {
    res.status(200).send(`List of My Blocked Users = ${blockedProfiles}`);
  }).catch(err => console.log(err))
}

//get list of photos by id
exports.getPhotoListByID = (req, res) => req.app.get('db').getPhotoList(req.params.id).then(photolist => res.status(200).send(photolist))

//add photo to your photo list
exports.addPhotoToListByID = (req, res) => req.app.get('db').addPhoto(req.params.id, req.body.uri).then(photoResponse => res.status(200).send(`Photo was add successfully`))

//delete photo by id
exports.deletePhotoToListByID = (req, res) => req.app.get('db').deletePhoto(req.params.id).then(_ => res.status(200).send(`Photo was deleted successfully`))

//get interests by id
exports.getInterestsByID = (req, res) => req.app.get('db').getInterests(req.params.id).then(interests => res.status(200).send(interests))

//add interests by id
exports.addInterestsByID = (req, res) => req.app.get('db').addInterests(req.params.id, req.body.interest).then(_ => res.status(200).send(`Interest was added successfully`))