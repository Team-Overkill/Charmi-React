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


