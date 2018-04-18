import React from 'react'
import $ from 'jquery'
// require('../cubeTransition.js')
require('../../styles/style.scss')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  rotateCube = (e, side) => {
    e.preventDefault()
    $('#cube').removeClass().addClass(`show-${side}`)
  }

  componentDidMount() {
    window.setTimeout(() => {
      $('#spinner').css('display', 'none')
      $('#root').css('display', 'block')
      $('#appgradeText h1').animate({
        'opacity': '1'
      }, {
        duration: 1000,
        queue: false
      })
      $('#appgradeText h1:nth-child(1)').animate({
        'margin-right': '0'
      }, {
        duration: 500,
        queue: false
      })
      $('#appgradeText h1:nth-child(2)').animate({
        'margin-left': '0'
      }, {
        duration: 500,
        queue: false
      })
    }, 500);
  }

  render() {
    // const Spinner = () => (<div className="spinner-container">
    //   <svg className="svg-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    //     <circle cx="100" cy="100" r="80" stroke={colors.red}/>
    //     <circle cx="100" cy="100" r="60" stroke={colors.green}/>
    //     <circle cx="100" cy="100" r="40" stroke={colors.red}/>
    //     <circle cx="100" cy="100" r="20" stroke={colors.green}/>
    //   </svg>
    // </div>)

    const Side = ({pageName, side}) => {
      console.log({pageName})
      return (<div className={`child ${pageName} ${side}`}>
        <div className="link-container home">
          <a onClick={(e) => this.rotateCube(e, "front")} href="#">home</a>
        </div>
        <div className="link-container secret">
          <a onClick={(e) => this.rotateCube(e, "back")} href="#">secret</a>
        </div>
        <div className="link-container about">
          <a onClick={(e) => this.rotateCube(e, "top")} href="#">about</a>
        </div>

        <div className="link-container projects">
          <a onClick={(e) => this.rotateCube(e, "right")} href="#">projects</a>
        </div>

        <div className="link-container services">
          <a onClick={(e) => this.rotateCube(e, "bottom")} href="#">services</a>
        </div>

        <div className="link-container contact">
          <a onClick={(e) => this.rotateCube(e, "left")} href="#">contact</a>
        </div>
        {/* {extraHTML} */}
      </div>)
    }

    let FrontHTML = () => (<span id="appgradeText">
      <div className="headerContainer">
        <h1>app</h1>
        <h1>grade</h1>
      </div>
    </span>)
    let AboutHTML = () => (<p>About</p>)
    console.log(<AboutHTML/>)
    let ProjectsHTML = () => (<p>Projects</p>)
    let ServicesHTML = () => (<p>Services</p>)
    let ContactHTML = () => (<p>Contact</p>)
    let SecretHTML = () => (<p>Secret</p>)
    return (<div id='void'>
      <div id="cube" className="show-front">
        <Side side="front" pageName="home"/>
        <Side side="top" pageName="about"/>
        <Side side="right" pageName="projects"/>
        <Side side="bottom" pageName="services"/>
        <Side side="left" pageName="contact"/>
        <Side side="back" pageName="secret"/>
        {/* <Side side="front" name="home" extraHTML={<FrontHTML/>}/>
        <Side side="top" name="about" extraHTML={<AboutHTML/>}/>
        <Side side="right" name="projects" extraHTML={<ProjectsHTML/>}/>
        <Side side="bottom" name="services" extraHTML={<ServicesHTML/>}/>
        <Side side="left" name="contact" extraHTML={<ContactHTML/>}/>
        <Side side="back" name="secret" extraHTML={<SecretHTML/>}/> */
        }
      </div>

    </div>)
  }
}
