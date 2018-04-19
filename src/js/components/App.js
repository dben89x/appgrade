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
      $('#appgradeText h1').animate({
       'letter-spacing': '5px'
     }, {
       duration: 500,
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
        queue: true
      })
      window.setTimeout(() => {
        $('#appgradeText h2').animate({
          'opacity': '1', 'margin-top': '20px'
        }, {
          duration: 500,
          queue: false
        })
        window.setTimeout(() => {
          $('#appgradeText').animate({
            'opacity': '0', 'display': 'none'
          }, 500, ()=>{
            $('#appgradeText').css('display', 'none')
            $('#otherText').css('display', 'block')
            $('#void .arrow-container').css('display', 'block')
            $('#otherText, #void .arrow-container').each( (i, el)=>{
              $(el).animate({
                'opacity': '1'
              }, 500 )
            })
          })
        }, 1500 )
      }, 500 )
    }, 500)
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

    return (<div id='void'>
      <span id="appgradeText">
        <div className="headerContainer">
          <h1>app</h1>
          <h1>grade</h1>
          <h2>Upgrade your app</h2>
        </div>
      </span>
      <span id="otherText">
        <h1>Other text</h1>
        <h2>We do things</h2>
      </span>
      <div className="arrow-container">
        <div className="arrows" data-target='#banner1'>
          <div className="arrow arrow-first"></div>
          <div className="arrow arrow-second"></div>
        </div>
      </div>
    </div>)
  }
}
