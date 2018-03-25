import React from 'react'
require('../../styles/style.scss')
// import '../../styles/style.scss'
// import Projects from '../containers/projects'
// import Home from '../pages/Home'

const App = () => (<div id='banner1' className='banner'>
  <div id='overlay1'>
  </div>
  <div id='overlay2'>
    <div className='overlay-top overlay-edges'></div>
    <div className='overlay-bottom overlay-edges'></div>
    <div id='polygon1'></div>
  </div>
  <div className='circle-container'>
    <div className='circle'>
      <h1>foo</h1>
      <h2>bar</h2>
    </div>
  </div>
</div>)

export default App
