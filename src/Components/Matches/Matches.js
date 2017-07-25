import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getMatches } from '../../ducks/matchesReducer';
import { getAuthUser } from '../../ducks/userReducer'

import './Matches.css';

export class Matches extends Component {
  constructor(props) {
    super(props)

<<<<<<< HEAD




=======
    
>>>>>>> master
    // this.state = {
    //   matches: [{
    //     img: "http://saravazphotography.com/wp-content/uploads/2017/04/Carson-2sq(pp_w280_h280).jpg",
    //     name: "Joe"
    //   },
    //   {
    //     name: "Jane",
    //     img: "https://usercontent2.hubstatic.com/7134529_f520.jpg"
    //   }
    //   ]
    // }
  }
<<<<<<< HEAD
   componentWillMount() {
      this.props.getMatches(1);
    // this.props.getMatches();
     }

  render() {
    console.log(this.props.matches)
    console.log(this.state.matches)
    const matches = this.state.matches.filter(matches => matches)
=======
     componentDidMount () {
         this.props.getMatches(this.props.authUser.id)
      this.props.getAuthUser().then(console.log(this.props.authUser));
     }

  render() {
  console.log(this.props.matches[1])


 
    // let matchSet = this.props.matches[0].map(e => {
    //   if (e.user_1 !== this.props.authUser.id)  {

    //   } 
    // })
    // interate over this.props.matches[0] map over it inside map 

>>>>>>> master


  var userProfiles = this.props.matches[1] || [];
    const matches = userProfiles
    // .filter(matches => matches)

      .map((match, index) => {
        return (
        <div key={index} className="matchesWrapper">
          
          <div>
          <img src={match.primary_photo}/>
          </div>
          
          <span>{match.first_name}</span>
          
          <i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize: 25, fontWeight: 500, marginRight: 15}}></i>
          
        </div>
        )
      });

    return (
      <div>
      
        <header className="matchesHeader">

          <Link to={`/browse`}>
            <i className="fa fa-angle-left" aria-hidden="true" style={{fontSize: 30, fontWeight: 700}}></i>
          </Link>

            <span>Matches</span>

          <Link to={`/messages`}>
            <i className="fa fa-pencil fa-2x" aria-hidden="true" style={{fontSize: 22}}></i>
          </Link>

        </header>

        {matches}

      </div>
    )
}
}
function mapStateToProps(state) {
  console.log(state)
  if (!state.matchesReducer.matches) {
        return {}
  }
  else {
    return {
        authUser: state.userReducer.authUser,
        matches: state.matchesReducer.matches
      }
  } 
}

export default connect(mapStateToProps, {getMatches, getAuthUser})(Matches)