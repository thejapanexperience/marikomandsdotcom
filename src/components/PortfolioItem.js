import React from 'react';
// import PropTypes from 'prop-types';
import ReactDemo1 from './miniProject01/MiniProject';
import MiniProjects from './MiniProjects';

class PortfolioItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.data.reactDemo > -2) {
      setTimeout(() => {
        if (document.getElementById('section4Box'))
          document.getElementById('section4Box').className = 'section4Box';
        if (document.getElementById('section4'))
          document.getElementById('section4').className = 'section4';
        if (document.getElementById('reactDemo1'))
          document.getElementById('reactDemo1').className = 'reactBoxBox';
        if (document.getElementById('reactDemo11'))
          document.getElementById('reactDemo11').className = 'reactBox';
      }, 1000);
    } else {
      setTimeout(() => {
        document.getElementById('portfolioBox').className = 'portfolioBox';
        document.getElementById('portfolioItemTitle').className =
          'portfolioTitleText';
        document.getElementById('youtubeBox').className = 'iframe';
        document.getElementById('portfolioBodyText').className =
          'portfolioBodyText';
        document.getElementById('portfolioLink').className = 'portfolioLink';
        // document.getElementById('section4').className ='section4';
      }, 1000);
    }
  }

  componentDidUpdate() {
    if (this.props.data.reactDemo > -2) {
      setTimeout(() => {
        // document.getElementById('section4').className ='section4';
        if (document.getElementById('reactDemo1'))
          document.getElementById('reactDemo1').className = 'reactBoxBox';
        if (document.getElementById('reactDemo11'))
          document.getElementById('reactDemo11').className = 'reactBox';
        if (document.getElementById('section4Box'))
          document.getElementById('section4Box').className = 'section4Box';
      }, 1000);
    } else {
      setTimeout(() => {
        if (document.getElementById('portfolioItemTitle'))
          document.getElementById('portfolioItemTitle').className =
            'portfolioTitleText';
        if (document.getElementById('portfolioBox'))
          document.getElementById('portfolioBox').className = 'portfolioBox';
        if (document.getElementById('youtubeBox'))
          document.getElementById('youtubeBox').className = 'iframe';
        if (document.getElementById('portfolioBodyText'))
          document.getElementById('portfolioBodyText').className =
            'portfolioBodyText';
        if (document.getElementById('portfolioLink'))
          document.getElementById('portfolioLink').className = 'portfolioLink';
        // if(document.getElementById('section4'))document.getElementById('section4').className ='section4';
      }, 1000);
    }
  }

  render() {
    const { data, imageIndex, click } = this.props;
    let icons = 'icons';
    const url = 'http://';
    let links;

    if (data.link) {
      links = data.link.map((lnk, i) => {
        if (i === 1) {
          return (
            <span key={i}>
              {' '}
              |{' '}
              <a href={url + lnk} target="_blank">
                github
              </a>
            </span>
          );
        }
        if (i === 2) {
          return (
            <span key={i}>
              {' '}
              |{' '}
              <a href={url + lnk} target="_blank">
                youtube
              </a>
            </span>
          );
        }
        if (i === 3) {
          return (
            <span key={i}>
              {' '}
              |{' '}
              <a href={url + lnk} target="_blank">
                twitter
              </a>
            </span>
          );
        }
        return (
          <span key={i}>
            <a href={url + lnk} target="_blank">
              {lnk}
            </a>
          </span>
        );
      });
    } else {
      links = (
        <span key="noLinks">
          {' '}
          |{' '}
          <a href="#" target="_blank">
            nothingYet
          </a>
        </span>
      );
    }

    // if(data.src){
    //   media = (
    //     <div className="portfolioYoutubeBox">
    //       <div className="portfolioYoutubeVideo">
    //         <iframe id="youtubeBox" className="iframe" src={data.src} frameBorder="0" allowFullScreen />
    //       </div>
    //     </div>);
    // }
    let media;
    if (data.image && data.link) {
      let image = data.image[imageIndex];
      let src;
      switch (image) {
        case 'Entable.png':
          src = require('../images/Entable.png');
          break;
        case 'eduku.png':
          src = require('../images/eduku.png');
          break;
        case 'richardmandsdotcom.png':
          src = require('../images/richardmandsdotcom.png');
          break;
        default:
          src = require('../images/theFastLife.png');
      }
      media = (
        <div className="portfolioImageBox">
          <div className="portfolioImage">
            <a
              href={url + data.link[0]}
              target="_blank"
              className="portfolioImageHREF"
            >
              <img id="youtubeBox" className="iframeHidden" src={src} />
            </a>
          </div>
        </div>
      );
    }

    let iconJS = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Javascript.png')}
          alt="Javascript"
        />
      </div>
    );

    let iconHTMLCSS = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/HTML5CSS3.png')}
          alt="HTMLCSS"
        />
      </div>
    );

    let iconSASS = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Sass.png')}
          alt="Sass"
        />
      </div>
    );

    let iconReact = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/React.png')}
          alt="React"
        />
      </div>
    );

    let iconExpress = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Express.png')}
          alt="Express"
        />
      </div>
    );

    let iconNode = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Node.png')}
          alt="Node"
        />
      </div>
    );

    let iconWebpack = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/webpack.png')}
          alt="Webpack"
        />
      </div>
    );

    let iconRedux = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Redux.png')}
          alt="Redux"
        />
      </div>
    );

    let iconSocketIO = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/SocketIO.png')}
          alt="SocketIO"
        />
      </div>
    );

    let iconFirebase = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Firebase.png')}
          alt="Firebase"
        />
      </div>
    );

    let iconFlux = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Flux2.png')}
          alt="Flux2"
        />
      </div>
    );

    let iconMongoDB = (
      <div className="iconBoxImageBoxPortfolio">
        <img
          className="iconBoxImage"
          src={require('../images/techIcons300/Mongo.png')}
          alt="Mongo"
        />
      </div>
    );

    switch (data.title) {
      case 'EDUKU':
        icons = (
          <div className="iconBoxOuterPortfolio">
            <div className="iconBoxPortfolio">
              {iconJS}
              {iconHTMLCSS}
              {iconReact}
              {iconRedux}
              {iconNode}
              {iconExpress}
              {iconMongoDB}
              {iconWebpack}
            </div>
          </div>
        );
        break;
      case 'THE FAST LIFE':
        icons = (
          <div className="iconBoxOuterPortfolio">
            <div className="iconBoxPortfolio">
              {iconHTMLCSS}
              {iconReact}
              {iconRedux}
              {iconNode}
              {iconExpress}
              {iconMongoDB}
              {iconWebpack}
              {iconFirebase}
            </div>
          </div>
        );
        break;
      case 'RICHARDMANDS.COM':
        icons = (
          <div className="iconBoxOuterPortfolio">
            <div className="iconBoxPortfolio">
              {iconJS}
              {iconHTMLCSS}
              {iconSASS}
              {iconReact}
              {iconNode}
              {iconExpress}
              {iconWebpack}
            </div>
          </div>
        );
        break;
      case 'ENTABLE':
        icons = (
          <div className="iconBoxOuterPortfolio">
            <div className="iconBoxPortfolio">
              {iconHTMLCSS}
              {iconReact}
              {iconFlux}
              {iconNode}
              {iconExpress}
              {iconMongoDB}
              {iconWebpack}
              {iconSocketIO}
            </div>
          </div>
        );
        break;
      default:
        icons = (
          <div className="iconBoxOuterPortfolio">
            <div className="iconBoxPortfolio">
              {iconReact}
              {iconRedux}
              {iconNode}
              {iconExpress}
              {iconMongoDB}
              {iconWebpack}
            </div>
          </div>
        );
    }


      return (
        <div className="portfolioBoxBox">
          <div className="portfolioBoxHidden" id="portfolioBox">
            <div className="portfolioTitleTextHidden" id="portfolioItemTitle">
              {data.title}
            </div>
            <div className="portfolioBodyTextHidden" id="portfolioBodyText">
              {data.text}
            </div>
            <div className="portfolioLinkHidden" id="portfolioLink">
              {links}
            </div>
            <div className="iconsAndApp">
              {icons}
              {media}
            </div>
          </div>
        </div>
      );
  }
}

PortfolioItem.propTypes = {
  // children: PropTypes.element
};

export default PortfolioItem;
