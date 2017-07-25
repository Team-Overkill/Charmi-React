import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getMatches } from '../../ducks/matchesReducer';

import './Matches.css';

export class Matches extends Component {
  constructor(props) {
    super(props)

    
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
   componentWillMount() {
     
      // this.props.getMatches(1)
      // .then( response => {
        
    //  this.loadMatches()
    // // this.props.getMatches();
    //   })
    
     }

     componentDidMount () {
         this.props.getMatches(1)
     
      //  this.loadMatches()
     }
    
   
    loadMatches() {
     const useForMatches = this.props.matches[1] 
     console.log(useForMatches)
     const nameArr = []
      useForMatches.forEach(i => {
  for (let key in i){
    if(key === 'first_name'){
      this.nameArr.push(i.first_name)
      console.log(nameArr)
    }
    else if (key === 'primary_photo'){
      this.nameArr.push(i.primary_photo)
    }
  }
})
    }

  render() {
console.log(this.props.matches[1])


 


// const matchesProfiles = this.props.matches[1].map(i => {
//   // for (var key in i) {
//   //   if (i.first_name) {
//       console.log(i.first_name)
//   //   }
//   // }
// })
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
        matches: state.matchesReducer.matches
      }
  } 
}

export default connect(mapStateToProps, {getMatches})(Matches)