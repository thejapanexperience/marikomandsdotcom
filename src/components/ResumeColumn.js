import React from 'react';

class ResumeColumn extends React.Component {
  constructor() {
    super();
    this.state = {
      showResume: false,
      buttonText1: 'Show résumé?',
      buttonText2: 'Hide résumé?',
      buttonText: 'Show résumé?'
    };
  }

  render() {
    let buttonText = this.props.buttonText;

    // let image =
    // <div className="one">
    //   <div className="oneInner">
    //     <img className="img" src={require("../images/meWidishIsh.jpg")} alt=""/>
    //   </div>
    // </div>

    let introduction = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">RICHARD MANDS</div>
          </div>
          <div className="contentBox">
            {/* <div className="resumeImageColumn"/> */}
            <img
              className="imgColumn"
              src={require('../images/RichardBWSquare900.jpg')}
              alt=""
            />
            <div className="contentContentImage">
              A quick study who has learned how to learn, I have a strong
              leadership background, adapt easily to new technologies and bring
              with me a real passion for what I do, a fierce work-ethic and an
              honest desire to leave the world a better place each day.{' '}
            </div>
          </div>
        </div>
      </div>
    );

    let quickPoints = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">QUICK POINTS</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              - Lead Software Engineer at{' '}
              <a target="_blank" href="http://www.bedegaming.com/">
                Bede Gaming
              </a>
              <br />- Software Engineer at
              <a target="_blank" href="http://www.sage.com/">
                Sage
              </a>
              <br />- 3 years coding, designing & marketing at{' '}
              <a
                target="_blank"
                href="https://www.facebook.com/CinderhouseCreative/"
              >
                Cinderhouse Creative
              </a>
              <br />- Cofounder / lead developer of{' '}
              <a target="_blank" href="https://www.facebook.com/projecteduku/">
                Eduku
              </a>
              <br />- Hackathon prize winner
              <br />- Pro photographer / videographer
              <br />- UK / Canada passport holder
              <br />
            </div>
          </div>
        </div>
      </div>
    );

    let contact = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">CONTACT</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              Portfolio:{' '}
              <a target="_blank" href="http://www.richardmands.com">
                richardmands.com
              </a>
              <br />
              Phone: +44 07507 881794
              <br />
              richard@eduku.org
              <br />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/richardmands"
              >
                linkedin.com/in/richardmands
              </a>
              <br />
              <a target="_blank" href="https://github.com/thejapanexperience">
                github.com/thejapanexperience
              </a>
              <br />
              <a target="_blank" href="https://twitter.com/RichardMands">
                twitter.com/RichardMands
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    );

    let profile = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">PROFILE</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              Currently Lead Software Engineer at Bede Gaming.
            </div>
            <div className="contentContent">Software Engineer at Sage.</div>{' '}
            <div className="contentContent">
              Co-Founder / Visual Director / Developer at Cinderhouse Creative.
            </div>
            <div className="contentContent">
              Lead developer / Co-owner of Eduku : an online education platform
              made using React, Redux, Express, Auth0, MongoDB.
            </div>
            <div className="contentContent">
              Proficient with a JS stack based around React, Redux, Node,
              Express and Webpack. I've also worked with a variety of other
              React adjacent technologies such as MongoDB, Mongoose, Gatsby,
              Parcel, Flux, etc, as well as Ruby (Rails, Sinatra) AWS (Lambda,
              SNS/SQS, Serverless) and have experience of technologies such as
              Socket.io, DynamoDB, Firebase, Google APIs and others.
            </div>
            <div className="contentContent">
              Won Cisco’s 1st place prize at AngelHack’s Lady Problems hackathon
              in San Francisco for Entable, an sms-based, Tropo-powered
              table-banking system.
            </div>
            <div className="contentContent">
              Co-founder of 3 social enterprise case-studies that funded
              business-development competitions on{' '}
              <a href="https://herox.com/domogo" target="_blank">
                HeroX
              </a>{' '}
              for{' '}
              <a href="http://www.kitointl.org/" target="_blank">
                Kito International
              </a>{' '}
              graduates in Kenya.
            </div>
            <div className="contentContent">
              Professional level photography, videography and video editing
              skill. Have worked on projects in Australia, China and the UK
            </div>
            <div className="contentContent">
              Proficient with Photoshop, Lightroom, Premiere Pro, After-Effects,
              Audition, Autopano Video (360 video software).
            </div>
            <div className="contentContent">
              Qualified secondary science teacher with a degree in Biochemistry
              and 10 years of experience working in education in the UK and
              Asia.
            </div>
          </div>

          {/* <div className="one50">
        </div> */}
        </div>
      </div>
    );

    let bede = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              <a target="_blank" href="http://www.bedegaming.com/">
                BEDE GAMING
              </a>{' '}
              | Jul ‘18 - Present
            </div>
          </div>

          <div className="contentBox">
            <div className="contentContent">
              Lead Software Engineer | Newcastle, UK
            </div>
            <div className="contentContent">
              JavaScript, React, Backbone, Marionette, Jira, Scrum.
            </div>
            <div className="contentContent">
              - responsible for leading a team of developers, working with
              stake-holders, writing tickets / estimation, managing scrum
              ceremonies, 1-2-1s, etc.
            </div>
            <div className="contentContent">
              - transitioning front-end product over to a React stack while
              introducing new features.
            </div>
          </div>
        </div>
      </div>
    );

    let sage = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              <a target="_blank" href="http://www.sage.com/">
                SAGE
              </a>{' '}
              | Jul ‘17 - Jul '18'
            </div>
          </div>

          <div className="contentBox">
            <div className="contentContent">
              Software Developer | Newcastle, UK
            </div>
            <div className="contentContent">
              Ruby, Rails, Sinatra, MySQL, RSpec, JavaScript, React, Jasmine,
              Git, Docker, AWS, Postmark, Jira, Scrum.
            </div>
            <div className="contentContent">
              - worked with a very large codebase, adding features and fixing
              bugs.
            </div>
            <div className="contentContent">
              - successfully developed a new email service using Postmark,
              Sinatra, AWS and Docker that sends millions of emails per year.
            </div>
            <div className="contentContent">
              - mentored new graduate developers.
            </div>
            <div className="contentContent">
              - taken a lead role in scrum meetings, delivered presentations,
              led communications with other departments, etc
            </div>
            <div className="contentContent">
              - developed my own large-scale project on a volunteer basis with
              the{' '}
              <a
                target="_blank"
                href="http://www.sage.com/company/sage_foundation"
              >
                Sage Foundation
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    );

    let cinderhouse = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              <a
                target="_blank"
                href="https://www.facebook.com/CinderhouseCreative/"
              >
                CINDERHOUSE CREATIVE
              </a>{' '}
              | Oct ‘14 - Jun ‘17
            </div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              Co-Founder / Visual Director / Developer | Nanjing, China
            </div>
            <div className="contentContent">
              Since co-founding Cinderhouse Creative, we have delivered projects
              for clients such as Officemax, Unilever, Sinoma, JHerro and
              SkyData, among others.
            </div>
            <div className="contentContent">
              Additionally, through Cinderhouse Creative, I am the co-founder of
              3 social enterprise (self-funded charity) case-studies:{' '}
              <a href="https://www.facebook.com/projecteduku/" target="_blank">
                Eduku
              </a>
              ,{' '}
              <a href="https://www.facebook.com/stockdisrupt/" target="_blank">
                Stock Disrupt
              </a>{' '}
              and{' '}
              <a href="https://www.facebook.com/projectdomogo/" target="_blank">
                Domogo
              </a>{' '}
              that have featured in several publications including the BBC.
            </div>
          </div>
        </div>
      </div>
    );

    let eduku = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              <a href="https://www.facebook.com/projecteduku/" target="_blank">
                EDUKU
              </a>{' '}
              | Aug ’15 - Jun ‘17
            </div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              Co-Founder / Lead Developer | Nanjing, China
            </div>
            <div className="contentContent">
              <a href="https://www.facebook.com/projecteduku/" target="_blank">
                Eduku
              </a>{' '}
              is a Cinderhouse Creative social enterprise, that aims to raise
              funds for those lacking educational opportunities in low-income
              countries via an online learning platform.
            </div>
            <div className="contentContent">
              The platform will allow users to interact with online learning
              resources as well as participate in the allocation of profits
              towards social outcomes.
            </div>
          </div>
        </div>
      </div>
    );

    // let selfStudy =
    // <div className="one">
    //   <div className="oneInner">
    //
    //     <div className="titleBox">
    //       <div className="titleContent">
    //         SELF-STUDY
    //         | Dec '16 - Present
    //       </div>
    //     </div>
    //     <div className="contentBox">
    //       <div className="contentContent">
    //         I have completed the following online courses:
    //       </div>
    //       <div className="contentContent">
    //         Pluralsight |
    //         <a href="https://app.pluralsight.com/library/courses/better-css/table-of-contents" target="blank"> A Better CSS: LESS and SASS</a> |
    //         <a href="https://app.pluralsight.com/library/courses/css3-in-depth/table-of-contents" target="blank"> CSS3 In-Depth</a> |
    //         <a href="https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents" target="blank"> Building Applications with React and Flux</a> |
    //         <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents" target="blank"> Building Applications with React and Redux in ES6</a>
    //       </div>
    //       <div className="contentContent">
    //         Udacity |
    //         <a href="https://classroom.udacity.com/courses/ud893" target="blank"> Responsive Design Fundamentals</a> |
    //         <a href="https://classroom.udacity.com/courses/ud882" target="blank"> Responsive Images</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    let teaching = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              <a href="https://bsn.org.cn/" target="_blank">
                BRITISH SCHOOL OF NANJING
              </a>{' '}
              | Apr '12 - Jul '16
            </div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              Science & ICT Teacher / Assessment Coordinator | Nanjing, China
            </div>
            <div className="contentContent">
              Taught science and ICT to students aged 10-18.
            </div>
            <div className="contentContent">
              Developed and implemented a google-drive based real-time
              assessment and feedback system for students and teachers.
            </div>
            <div className="contentContent">
              Won the technology development prize from the{' '}
              <a href="https://www.britishschools.co.uk/" target="_blank">
                British Schools Foundation
              </a>
              .
            </div>
            <div className="contentContent">
              Developed training curricula and led inset for staff with the goal
              of improving IT integration.
            </div>
            <div className="contentContent">
              Created and led highly successful after-school programs related to
              charity work and fundraising.
            </div>
          </div>
        </div>
      </div>
    );

    let teachingCont = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              OTHER TEACHING | Apr '04 - Mar '12
            </div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              <a href="http://www.londonacademy.org.uk/" target="_blank">
                London Academy
              </a>{' '}
              | Secondary Science Teacher | London, UK
            </div>
            <div className="contentContent">
              Various | English Teacher | Tokyo, Japan
            </div>
          </div>
        </div>
      </div>
    );

    let teachingQualification = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">
              TEACHING QUALIFICATION | '09 - '10
            </div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              <a href="http://www.ucl.ac.uk/ioe" target="_blank">
                Institute of Education : UCL
              </a>{' '}
              | Secondary Science PGCE | London, UK
            </div>
          </div>
        </div>
      </div>
    );

    let universityDegree = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">UNIVERSITY DEGREE | '99 - '03</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              <a href="https://www.york.ac.uk/" target="_blank">
                University of York
              </a>{' '}
              | Biochemistry BSc | York, UK
            </div>
          </div>
        </div>
      </div>
    );

    let langPro = (
      <div className="one">
        <div className="oneInnerFlex">
          <div className="titleBox">
            <div className="titleContent">
              LANGUAGES & LIBRARIES : Proficient
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                HTML <br />
                CSS <br />
                JS <br />
                Docker <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                React.js <br />
                Redux <br />
                Webpack <br />
                AWS <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                Node.js <br />
                Express <br />
                MongoDB <br />
                Mongoose <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                Ruby <br />
                Rails <br />
                RSpec <br />
                Sinatra <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let langExp = (
      <div className="one">
        <div className="oneInnerFlex">
          <div className="titleBox">
            <div className="titleContent">
              LANGUAGES & LIBRARIES : Experience
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                MySQL <br />
                Firebase <br />
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                Socket.IO <br />
                Google APIs <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                Tropo <br />
                Watson APIs <br />
              </div>
            </div>
          </div>

          <div className="twentyFiveColumn">
            <div className="contentBox">
              <div className="contentContent">
                Auth0 <br />
                React-DnD <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let personalInformation = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">PERSONAL INFORMATION</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              I'm married and have two young children.
              <br />I hold UK and Canadian passports. <br />I can speak, read
              and write Japanese to an intermediate level. <br />
            </div>
          </div>
        </div>
      </div>
    );

    let quickNote = (
      <div className="one">
        <div className="oneInner">
          <div className="titleBox">
            <div className="titleContent">QUICK NOTE</div>
          </div>
          <div className="contentBox">
            <div className="contentContent">
              I currently live in Whitley Bay, England where I am working on
              projects for Cinderhouse Creative, with a focus on Eduku. However,
              I am available to relocate at short notice for the right position.
            </div>
          </div>
        </div>
      </div>
    );

    let showOrHide;
    if (this.props.showResume) {
      showOrHide = 'resumeBox';
    } else {
      showOrHide = 'resumeBoxHide';
    }

    return (
      <div className="resumeColumnBoxBox">
        <div
          className="tabBarResume"
          onClick={e => this.props.resumeColumnClick(e)}
        >
          <div className="tabBarTabActiveResume" id="resumeColumnButton">
            <div className="tabBarTabTitle">{buttonText}</div>
          </div>
        </div>

        <div className={showOrHide} id="resumeColumn">
          <div className="letterBox">
            <div className="letter">
              <div className="letterContent">
                {introduction}

                {quickPoints}

                {contact}

                {profile}

                {/* {langPro} */}

                {/* {langExp} */}

                {bede}
                {sage}

                {cinderhouse}

                {eduku}

                {teaching}

                {teachingCont}

                {teachingQualification}

                {universityDegree}

                {personalInformation}

                {/* {quickNote} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeColumn;
