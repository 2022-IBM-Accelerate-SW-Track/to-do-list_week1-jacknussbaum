import React, { Component } from 'react';
import "./About.css";
import JackProfilePic from "../assets/JackProfilePic.jpg";  

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              alt="Profile Pic" src={JackProfilePic}
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jack Nussbaum</div>
            <div className="brief_description">
              I am a Computer Science major at the University of Washington, living in Seattle, WA. I love the outdoors and playing sports, particularly basketball and spikeball. 
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}