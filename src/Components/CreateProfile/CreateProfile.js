import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStateList } from '../../ducks/userReducer';
import './CreateProfile.css';
/*
XX about
XX ,	age
,	age_range
,	auth_token
XX ,	first_name
XX ,	gender
XX ,	geolocation
XX ,	height
XX ,	home_town
XX ,	primary_photo
XX ,	relationship_readiness
XX ,	school
XX ,	search_location_radius
XX ,	search_hometown
XX ,	work
XX ,	home_state_id
*/

class CreateProfile extends Component {

  constructor(props) {
    super(props)
    //send object
    this.state = {
      "first_name": ""
      , "age": 0
      , "height": ""
      , "home_town": ""
      , "home_state_id": ""
      , "geolocation": ""
      , "about": ""
      , "work": ""
      , "school": ""
      , "relationship_readiness": 0
      , "age_range": ""
      , "search_location_radius": 0
      , "search_hometown": true
      , "primary_photo": ""
      , "auth_token": ""
      , "gender": "Male"
    }
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this)
    this.handleHeightInput = this.handleHeightInput.bind(this)
    this.handleAgeSelect = this.handleAgeSelect.bind(this)
    this.handleGenderSelect = this.handleGenderSelect.bind(this)
  }

  //Get states list
  componentWillMount() {
    this.props.getStateList()
  }

  handleSaveClick() {
    alert(`clicked ${JSON.stringify(console.log(this.state))}`)
  }

  handleCancelClick() {
    alert(`clicked`)
  }

  handleFirstNameInput(e) {
    this.setState({
      "first_name": e.target.value
    })
  }

  handleHeightInput(e) {
    this.setState({
      "height": e.target.value
    })
  }

  handleAgeSelect(e) {
    this.setState({
      "age": e.target.value
    })
  }

  handleGenderSelect(e) {
    this.setState({
      "gender": e.target.value
    })
  }

  handleHomeTown(e) {
    this.setState({
      "home_town": e.target.value
    })
  }

  handleHomeState(e) {
    this.setState({
      "home_state_id": e.target.value
    })
  }

  render() {
    const stateList = this.props.stateList

    //create Dynamic Age List
    const ageList = []
    const setAgeList = (start, end) => {
      let count = start - 1
      for (let i = start; i <= end; i++) {
        count++
        ageList.push(count)
      }
    }
    setAgeList(18, 120)


    //populate state droplist
    const statesDroplist = stateList.map((cState, i) => {
      return (
        <option key={cState.id} value={cState.state_name}>{cState.state_name}</option>
      )
    })
    //populate age droplist
    const ageDroplist = ageList.map((age, i) => {
      return (
        <option key={i} value={age}>{age}</option>
      )
    })


    return (

      <div className='main-wrapper'>

        <div className="editNav">
          <header className="createProfileHeader">
            <div id='title'>Edit Profile</div>
            <Link to={`/browse`}>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </header>
        </div>

        <form className='content-wrapper'>
          <div className='personal-info-wrapper'>

            <div>
              <input type='text' placeholder='First Name' onChange={e => this.handleFirstNameInput(e)} />
            </div>

            <div className="ageGender">
              <select defaultValue='Age' onChange={e => this.handleAgeSelect(e)}>
                <option value="Age">Age</option>
                {ageDroplist}
              </select>
              <select defaultValue='Male' onChange={e => this.handleGenderSelect(e)}>
                <option value='Male'>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <input type='text' placeholder='Height' onChange={e => this.handleHeightInput(e)} />
            </div>

            <div>
              <input type='text' placeholder='Home Town' onChange={e => this.handleHomeTown(e)} />
            </div>

            <div>
              <select defaultValue='Home State' style={{width: 100}}>
                <option>State</option>
                {statesDroplist}
              </select>
            </div>

            <div>
              <input type='text' placeholder='Profile Photo' />
            </div>

            <div>
              <input type='text' placeholder='Occupation' />
            </div>

            <div>
              <input type='text' placeholder='School' />
            </div>

            <div>
              <textarea placeholder='About' />
            </div>

          </div>

          <div className='preferences'>
            {/* <div>
              <input type='checkbox' className='preferences-checkbox' /><span className='preferences-checkbox-text'>Search Home Town</span>
            </div>
            <div>
              <input type='checkbox' className='preferences-checkbox' defaultChecked /><span className='preferences-checkbox-text'>Use Location</span>
            </div> */}
            <div>

              <select style={{marginBottom: 7}} >
                <option>Relationship Readiness</option>
                <option>Just Looking</option>
              </select>
              
              <br />
              <hr />
              {/* <div>
              <p className='preferences-text'>Discovery Settings</p>
              </div>  */}
              <div className="searchRange">
                <p>Age Range</p>
                <select defaultValue='Age Start'>
                  <option value="Age Start">Age Min</option>
                  {ageDroplist}
                </select>
                <select defaultValue='Age End'>
                  <option value="Age End">Age Max</option>
                  {ageDroplist}
                </select>
              </div>

              <br />

              <div className="searchRange">
                <p>Search Range</p>
                <select defaultValue='default'>
                  <option value='default'>Search Radius in Miles</option>
                  <option>Any</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                  <option>75</option>
                  <option>100</option>
                  <option>150</option>
                  <option>200</option>
                  <option>300</option>
                  <option>500</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className='actions-wrapper'>
            <input type='submit' className='action-button' value='SAVE' onClick={this.handleSaveClick} style={{border: "solid 3px #00CED1" }} />
            <input type='reset' className='action-button' value='LOGOUT' onClick={this.handleCancelClick} style={{border: "solid 3px #00CED1" }} />
          </div>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {return {stateList: state.userReducer.stateList}}
export default connect(mapStateToProps, { getStateList })(CreateProfile)
