import React, { Component } from 'react';

class MiniProjects extends Component {
  render() {
    return (
      <div className="section4BoxHidden" id="section4Box">
        <div className="section4" id="section4">
          <div className="section4Title">MINI-PROJECTS</div>
          <div className="section4Text">
            These projects are designed to showcase the usage of javascript
            technologies.
          </div>
          <div className="section4ImageBox">
            <div className="section4Image">
              <a target="_blank" href="https://github.com/thejapanexperience">
                <img className="iframe" src={require('../images/github.png')} />
              </a>
            </div>
          </div>
          <div className="miniProjectBox">
            <div className="miniProject">
              <a
                target="_blank"
                href="https://github.com/thejapanexperience/miniProjectsReact-Dnd"
                className="miniProjectLink"
              >
                React-DnD - Drag and drop using React and React-dnd
              </a>
            </div>
            <div className="miniProject">
              <a
                target="_blank"
                href="https://github.com/thejapanexperience/immersive-learning"
                className="miniProjectLink"
              >
                Study Bubble - A VR learning environment using A-Frame
              </a>
            </div>
            {/* <div className="miniProject">
              <a target="_blank" href="https://github.com/thejapanexperience/friendalizer" className="miniProjectLink">
                Friendalizer - Watson / Microsoft Cognitive Services
              </a>
            </div> */}
            <div className="miniProject">
              <a
                target="_blank"
                href="https://github.com/thejapanexperience/PokemonAPIViewer2"
                className="miniProjectLink"
              >
                PokeAPI - Using data from an external API
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniProjects;
