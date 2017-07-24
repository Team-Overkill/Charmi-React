import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Matches.css';

export default class Matches extends Component {
  constructor(props) {
    super(props)

    this.state = {
      matches: [{
        img: "http://saravazphotography.com/wp-content/uploads/2017/04/Carson-2sq(pp_w280_h280).jpg",
        name: "Joe"
      },
      {
        name: "Jane",
        img: "https://usercontent2.hubstatic.com/7134529_f520.jpg"
      }
      ]
    }
  }

  render() {

    const matches = this.state.matches.filter(matches => matches)

      .map((matches, index) => (
        <div key={index} className="matchesWrapper">
          
          <div>
          <img src={matches.img}/>
          </div>
          <span>
          {matches.name}
          </span>
          
          <i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize: 25, fontWeight: 500, marginRight: 15}}></i>
          
        </div>
      ));

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