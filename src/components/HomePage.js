import React from 'react';
import $ from 'jquery';
import PortfolioBox from './PortfolioBox';
import Resume from './Resume';
import ResumeColumn from './ResumeColumn';
import OtherSkills from './OtherSkills';
import axios from 'axios';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showResume: false,
      buttonText1: 'Show résumé?',
      buttonText2: 'Hide résumé?',
      buttonText: 'Show résumé?'
    };

    this.resumeColumnClick = this.resumeColumnClick.bind(this);
    this.resumeClick = this.resumeClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      function() {
        let top = this.scrollY;
        // let left = this.scrollX;
        let height0 = $('#section0Box').outerHeight(true);
        let height1 = $('#section1Box').outerHeight(true);
        let height2 = $('#section2Box').outerHeight(true);
        // let height3 = $('#section3Box').outerHeight(true);
        let totalHeight = height0 + height1 + height2 - 150;
        if (top > totalHeight) {
          document.getElementById('section0Nav').className = 'section0Gone';
          document.getElementById('navText').className = 'nav1TextGone';
        }
        if (top <= totalHeight) {
          document.getElementById('section0Nav').className = 'section0';
          document.getElementById('navText').className = 'nav1Text';
        }
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  resumeColumnClick(e) {
    e.preventDefault();
    if (!this.state.showResume) {
      document.getElementById('resumeColumn').className = 'resumeBox';
      document.getElementById('resumeColumnButton').className =
        'tabBarTabResume';
      document.getElementById('resumeButton').className = 'tabBarTabResume';
      this.setState({
        showResume: true,
        buttonText: this.state.buttonText2
      });
    } else {
      document.getElementById('resumeColumn').className = 'resumeBoxHide';
      document.getElementById('resumeColumnButton').className =
        'tabBarTabActiveResume';
      document.getElementById('resumeButton').className =
        'tabBarTabActiveResume';
      this.setState({
        showResume: false,
        buttonText: this.state.buttonText1
      });
    }
  }

  resumeClick(e) {
    e.preventDefault();
    if (!this.state.showResume) {
      document.getElementById('resume').className = 'resumeBox';
      document.getElementById('resumeButton').className = 'tabBarTabResume';
      document.getElementById('resumeColumnButton').className =
        'tabBarTabResume';
      this.setState({
        showResume: true,
        buttonText: this.state.buttonText2
      });
    } else {
      document.getElementById('resume').className = 'resumeBoxHide';
      document.getElementById('resumeButton').className =
        'tabBarTabActiveResume';
      document.getElementById('resumeColumnButton').className =
        'tabBarTabActiveResume';
      this.setState({
        showResume: false,
        buttonText: this.state.buttonText1
      });
    }
  }

  render() {
    return (
      <div>
        {/* <div className="backgroundImage" /> */}
        <div className="imageCache">
          {/* <img src={'../images/Entable.png'} alt="Entable" /> */}
          {/* <img src={require('../images/eduku.png')} alt="Eduku" />
          <img src={require('../images/richardmandsdotcom.png')} alt="richardmands.com" />
          <img src={require('../images/theFastLife.png')} alt="The Fast Life" /> */}
        </div>
        <div className="mainContainer" ref="mainContainer">
          <div className="navPadding" id="section0Box" />
          <div className="section0" id="section0Nav">
            <div className="navBox">
              <div className="nav1">
                <div className="nav1Text" id="navText">
                  marikomands.com
                </div>
              </div>
            </div>
          </div>

          <div className="section1Box" id="section1Box">
            <div className="section1">
              {/* <div className="section1Image">
                <img
                  className="section1BoxImage"
                  src={require('../images/RichardColorVertical900.jpg')}
                  alt="richardmands"
                />
              </div> */}
              <div className="flexText">
                <div className="section1Text1">Mariko Mands</div>
                <div className="section1Text2">International Sales Agent</div>
                <div className="section1Text2">Japan Specialist</div>
              </div>
              <div className="section1Text3Box">
                <a
                  className="section1Text3"
                  target="_blank"
                  href="https://github.com/thejapanexperience"
                >
                  <i className="fa fa-instagram fa-lg" />
                </a>
                <span className="section1Text3"> | </span>
                <a
                  className="section1Text3"
                  target="_blank"
                  href="https://twitter.com/RichardMands"
                >
                  <i className="fa fa-twitter fa-lg" />
                </a>
                <span className="section1Text3"> | </span>
                <a
                  className="section1Text3"
                  target="_blank"
                  href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"
                >
                  <i className="fa fa-linkedin fa-lg" />
                </a>
                {/* <span className="section1Text3"> | </span>
                <a className="section1Text3" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
              </div>
            </div>
          </div>

          <div className="section2Box" id="section2Box">
            <div className="section2">
              <div className="section2Text">
                <span className="section2TextTitle">
                  What can I do for you...
                </span>
                <div className="section2TextBodyBox">
                  <div className="section2TextBody">
                    I work with clients to make their products available to Japanese consumers,
                    making use of a wide range of online marketplaces.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section3Box" id="section3Box" ref="section3Box">
            <PortfolioBox />
          </div>



          <div className="section6Box">
            <div className="section6">
              <div className="section6Title">
                <div className="section6TitleText">CONTACT</div>
              </div>
              <div className="section6Title">
                <div className="section6Text">mariko.mands@gmail.com</div>
              </div>
              <div className="section6Title">
                <div className="section6IconsBox">
                  <a
                    className="section6Icons"
                    target="_blank"
                    href="https://github.com/thejapanexperience"
                  >
                    <i className="fa fa-instagram fa-lg" />
                  </a>
                  <span className="section6Icons"> | </span>
                  <a
                    className="section6Icons"
                    target="_blank"
                    href="https://twitter.com/RichardMands"
                  >
                    <i className="fa fa-twitter fa-lg" />
                  </a>
                  <span className="section6Icons"> | </span>
                  <a
                    className="section6Icons"
                    target="_blank"
                    href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"
                  >
                    <i className="fa fa-linkedin fa-lg" />
                  </a>
                  {/* <span className="section6Icons"> | </span>
                <a className="section6Icons" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="section5Box">
            <div className="section5">
              <div className="section5Title">RÉSUMÉ</div>
              <div className="section5Text">
                <a
                  target="_blank"
                  href="https://drive.google.com/open?id=0B6GYiEdGHBSDc0hMakI1a3FqRHc"
                  className="resumeLink"
                >
                  Download pdf
                </a>
                <span> / </span>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/0B6GYiEdGHBSDM25wckxSNzBYM1k/view?usp=sharing"
                  className="resumeLink"
                >
                  Download word
                </a>
              </div>
              {/* <div className="portfolioYoutubeBoxSmall">
              <div className="portfolioYoutubeVideo">
                <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
              </div>
              </div>
              <div className="section5Text2">
              Lorem oopsum lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div> */}
              <ResumeColumn
                resumeColumnClick={this.resumeColumnClick}
                buttonText={this.state.buttonText}
                showResume={this.state.showResume}
              />
              <Resume
                resumeClick={this.resumeClick}
                buttonText={this.state.buttonText}
                showResume={this.state.showResume}
              />
            </div>
          </div>

          {/* <OtherSkills /> */}

          <div className="footerBox">
            {/* <div className="emptySpace" /> */}
            <div className="footer">
              <div className="footerTextBox">
                <div className="footerText">marikomands.com</div>
                <div className="footerText2">
                created by <a
                  className="footerText2"
                  target="_blank"
                  href="https://richardmands.com"
                >
                  Richard Mands
                </a>
                </div>
              </div>
            </div>
            <div className="footer">
              <span className="footerIcons">
                <a
                  className="footerText3"
                  target="_blank"
                  href="https://github.com/thejapanexperience"
                >
                  <i className="fa fa-instagram fa-lg" />
                </a>
                <span className="footerText3"> | </span>
                <a
                  className="footerText3"
                  target="_blank"
                  href="https://twitter.com/RichardMands"
                >
                  <i className="fa fa-twitter fa-lg" />
                </a>

                <span className="footerText3"> | </span>
                <a
                  className="footerText3"
                  target="_blank"
                  href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"
                >
                  <i className="fa fa-linkedin fa-lg" />
                </a>
                {/* <span className="footerText3"> | </span>
              <a className="footerText3" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
