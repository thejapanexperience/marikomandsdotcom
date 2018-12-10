import React from 'react';

export default class OtherSkills extends React.Component {

  constructor(){
    super();
    this.state = {
      first: false,
      second: false,
      third: false,
    };
    this.firstClick = this.firstClick.bind(this);
    this.secondClick = this.secondClick.bind(this);
    this.thirdClick = this.thirdClick.bind(this);
  }

  firstClick(e) {
    e.preventDefault();
    if (!this.state.first) {
      document.getElementById('eAndT').className = 'section7Text';
      this.setState({
        first: true,
      });
    } else {
      document.getElementById('eAndT').className = 'section7TextHide';
      this.setState({
        first: false,
      });
    }
  }

  secondClick(e) {
    e.preventDefault();
    if (!this.state.second) {
      document.getElementById('photography').className = 'section7Text';
      document.getElementById('photographySample').className = 'section7ImageBox';
      this.setState({
        second: true,
      });
    } else {
      document.getElementById('photography').className = 'section7TextHide';
      document.getElementById('photographySample').className = 'section7TextHide';
      this.setState({
        second: false,
      });
    }
  }

  thirdClick(e) {
    e.preventDefault();
    if (!this.state.third) {
      document.getElementById('videography').className = 'section7Text';
      document.getElementById('videographySample').className = 'section7YoutubeBoxBox';
      this.setState({
        third: true,
      });
    } else {
      document.getElementById('videography').className = 'section7TextHide';
      document.getElementById('videographySample').className = 'section7TextHide';
      this.setState({
        third: false,
      });
    }
  }

  render() {
    return(
      <div className="section7Whole">
      

      <div className="section7Box1">
        <div className="section7">
          <div className="section7Title2" onClick={(e) => this.firstClick(e)}>EDUCATION & TRAINING</div>
          <div id="eAndT" className="section7TextHide">
            I am a UK qualified secondary science teacher with a decade of classroom teaching experience. In that
            time, as well as day-to-day teaching, I have developed original curricula, managed student assessment
            data, introduced Google Drive into student assessment and feedback at my school, won a technology
            development prize from my schools group, led teacher training sessions (mostly based around usage of
            technology) and been a leader in developing social enterprise / charitable giving. <br />
            <br />
            These are all experiences that have helped me develop the ability to understand and communicate new
            technologies in a clear and effective way.
          </div>
        </div>
      </div>

      <div className="section7Box2">
        <div className="section72">
          <div className="section7Title2" onClick={(e) => this.secondClick(e)}>PHOTOGRAPHY</div>
          <div id="photography" className="section7TextHide">
            I'm a passionate and experienced photographer, having shot a wide variety of jobs ranging in style
            from in-studio product shots, to on location portraiture and events. I am proficient with Photoshop,
            Lightroom and the whole suite of available plug-ins that expand Adobe's software.<br />
            <br />
            I own a range of professional cameras and lenses and would love to use my photography skills to
            support any organisation I work for. <br />
          </div>
          <div id="photographySample" className="section7TextHide">
            <img
              className="section7Image"
              src={require('../images/richardCollageWide02.jpg')}
              alt="richardmandsphotography"
            />
          </div>
        </div>
      </div>

      <div className="section7Box1">
        <div className="section7">
          <div className="section7Title2" onClick={(e) => this.thirdClick(e)}>VIDEOGRAPHY & EDITING</div>
          {/* <div className="section7Title2">
          AND EDITING
        </div> */}
          <div id="videography" className="section7TextHide">
            I have experience shooting a variety of projects that range from in-studio promos and product shots to
            on-location events and even 360 video (using a multi-camera GoPro rig). I shoot with professional
            standard cameras (Panasonic GH4) and lenses in 4K. <br />
            <br />
            I am proficient with Adobe Premiere Pro, After-Effects (mostly text animations) and Audition. I also
            have experience with recording high quality audio using shotgun, lavalier and traditional dynamic
            microphones recorded onto a variety of Zoom external recorders (H1, H5). <br />
            <br />
            As with my photography skills, it would be great to utilise my videography experience (if possible)
            alongside a role as a developer.
          </div>
          <div id="videographySample" className="section7TextHide">
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/U_icV5LqHKA"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/erew-BmkB6o"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/cdvg_jTrjlg"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/De1DiZgcEy0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/6zsAoQC8RcQ"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/1d0gc4Ux6Rc"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}
