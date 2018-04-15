import React from 'react'
import $ from 'jquery'
require('../../styles/style.scss')
// import '../../styles/style.scss'
// import Projects from '../containers/projects'
// import Home from '../pages/Home'

export default class App extends React.Component {

  componentDidMount() {
    $('#appgradeText h1').animate({'opacity': '1'}, {duration: 1000, queue: false} )
    // $('#appgradeText h1:nth-child(1)').animate({'right': '50%'}, {duration: 500, queue: false} )
    // $('#appgradeText h1:nth-child(2)').animate({'left': '50%'}, {duration: 500, queue: false} )
    $('#appgradeText h1:nth-child(1)').animate({'margin-right': '0'}, {duration: 500, queue: false} )
    $('#appgradeText h1:nth-child(2)').animate({'margin-left': '0'}, {duration: 500, queue: false} )
  }

  render() {
    return (<div id='banner1' className='banner'>
      <span id="appgradeText">
        <div className="headerContainer">
          <h1>app</h1>
          <h1>grade</h1>
        </div>
      </span>
      {/* <div id='overlay1'>
    </div> */
      }
      {/* <div id='overlay2'>
    <div className='content'></div>
    <div className='overlay-top overlay-edges'></div>
    <div className='overlay-bottom overlay-edges'></div>
    <div id='polygon1'></div>
  </div> */
      }
      {/* <div className='circle-container'>
          <div className='circle'>
          <h1>foo</h1>
          <h2>bar</h2>
        </div>
        </div> */
      }
    </div>)
  }
}
