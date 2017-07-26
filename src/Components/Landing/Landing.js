import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-logo-container">
        </div>


          <div className="landing-splash-video-overlay" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/video-overlay-white-background-border1.png)`}}>
            <video
              src="https://player.vimeo.com/external/173395141.hd.mp4?s=ec4198a3dd4120bcabaf222842018df488371c7b&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
              autoPlay
              loop
              preload="auto"
              muted
              className="landing-splash-video">
              {/*<source src="https://player.vimeo.com/external/173395141.hd.mp4?s=ec4198a3dd4120bcabaf222842018df488371c7b&profile_id=174&oauth2_token_id=57447761" type="video/mp4"/>*/}
              {/*<source src={`${process.env.PUBLIC_URL}/video/splash-page.mp4`} type="video/mp4"/>*/}
              Your browser doesn't support HTML5 video tag.
        </video>
          </div>



        <div className="landing-button-container">
          <button className="landing-btn landing-login-btn">
            <a href="http://localhost:3005/api/auth">Login with Auth0</a>
          </button>

          {/*<Link to={`/create-profile/`} className="landing-btn landing-create-profile-btn">*/}
            {/*<button className="landing-create-profile-btn">Create Profile</button>*/}
          {/*</Link>*/}
        </div>
        <div className="login-disclaimers-container">
          <p>
            We never post anything to Facebook.
          </p>
            <p>By signing in you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
<<<<<<< HEAD
    isLoggedIn: state.userReducer.isLoggedIn,
    user: state.userReducer.user
=======
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn
>>>>>>> master
  }
}

export default connect(mapStateToProps, {userReducer})(Landing)