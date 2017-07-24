import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './CreateProfile.css';


export default function CreateProfile() {
  return (
<div>
  <Link to={'/browse/'}><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
    <h4>Edit Profile</h4>
    {/* class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
      fullscreen: false,
      loading: false
    };
    
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleFileChange(event) {
    const {target} = event;
    const {files} = target;

    if (files && files[0]) {
      var reader = new FileReader();
      
      reader.onloadstart = () => this.setState({loading: true});

      reader.onload = event => {
        this.setState({
          data: event.target.result,
          loading: false
        });
      };
   
      reader.readAsDataURL(files[0]);
    }
  }
  
  handleClearClick() {
    this.setState({
      data: null,
      fullScreen: false
    });
  }
  
  handlePreviewClick() {
    const {data, fullScreen} = this.state;
 
    if (!data) {
      return;
    }
    
    this.setState({fullScreen: !fullScreen});
  }

  render() {
    const {data, fullScreen, loading} = this.state;
    const backgroundImage = data ? {backgroundImage: `url(${imgData})`} : null;
    const previewClasses = ['preview', fullScreen ? 'preview--fullscreen' : ''].join(' ');
          

    return (
      <div>

        <input
          id="car"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={this.handleFileChange}
        />

        <div
          className={previewClasses}
          style={backgroundImage}
          onClick={this.handlePreviewClick}
        >
          {!data && !loading &&
            <label htmlFor="car">
              Click to capture
            </label>
          }

          {loading &&
            <span>Loading...</span>
          }
        </div>
        
        <button type='button' onClick={this.handleClearClick}>
          Clear Image
        </button>

      </div>
    );
  }
}

ReactDOM.render(<ImagePicker />, document.querySelector('.app')); */}
    Photo
    First Name
    Age
    About Me
    Work
    School
    Relationship Ready


    <div>Discovery Settings</div>
    Looing for Ages
      <button>Logout</button>
     </div>
  )
}