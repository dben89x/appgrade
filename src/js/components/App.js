import React from 'react'
import $ from 'jquery'
require('../../styles/style.scss')
// import '../../styles/style.scss'
// import Projects from '../containers/projects'
// import Home from '../pages/Home'

export default class App extends React.Component {

  componentWillMount() {}

  componentDidMount() {
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
  }

  render() {
    const Spinner = () => (<div class="container">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="135" stroke="#404041"/>
        <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="85" stroke="#404041"/>
      </svg>
    </div>)

    return (<div id='banner1' className='banner'>
      <Spinner/>
      <span id="appgradeText">
        <div className="headerContainer">
          <h1>app</h1>
          <h1>grade</h1>
        </div>
      </span>

    </div>)
  }
}
