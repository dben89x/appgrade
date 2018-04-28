import React from 'react'
import $ from 'jquery'
require('../../styles/style.scss')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
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
            $('#banner1').css('display', 'inline-block')
            $('#void .arrow-container').css('display', 'block')
            $('#banner1, #void .arrow-container').each( (i, el)=>{
              $(el).animate({
                'opacity': '1'
              }, 500 )
            })
          })
        }, 1000 )
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
      <div id="heroContainer">
        <div id="appgradeText" className="banner banner-c-c">
          <header className="headerContainer">
            <h1>app</h1>
            <h1>grade</h1>
            <h2>Upgrade your app</h2>
          </header>
        </div>
        <div id="banner1" className="banner banner-c-c">
          <header id="otherText">
            <h1>Other text</h1>
            <h2>We do things</h2>
          </header>
        </div>
        <div className="arrow-container">
          <div className="arrows" data-target='#banner1'>
            <div className="arrow arrow-first"></div>
            <div className="arrow arrow-second"></div>
          </div>
        </div>
      </div>
      <div id="contentContainer">
        <section id="process" >
          <div className='stage discover'>
            <h2>Stage 0 - Discover</h2>
            <div className='questions'>
              <p>What are we trying to achieve?</p>
              <p>What demand are we trying to fill?</p>
              <p>Who is our target audience?</p>
              <p>How much do we want to spend?</p>
            </div>
            <div className='description'>
              <p>Every good app is able to clearly define a problem . In this stage, we define strategy and gather info.</p>
            </div>
          </div>
          <div className='stage plan'>
            <h2>Stage 1 - Plan</h2>
            <div className='questions'>
              <p>How should we structure our app?</p>
              <p>Which tech stack will be most efficient?</p>
            </div>

          </div>
          <div className='stage design'>
            <h2>Stage 2 - Design</h2>
            <div className='questions'>
              <p></p>
            </div>
          </div>
          <div className='stage build'>
            <h2>Stage 3 - Build</h2>
            <div className='questions'>
              <p></p>
            </div>
          </div>
          <div className='stage push'>
            <h2>Stage 4 - Push</h2>
            <div className='questions'>
              <p></p>
            </div>
            </div>
          <div className='stage maintain'>
            <h2>Stage 5 - Support</h2>
            <div className='questions'>
              <p></p>
            </div>
            Maintainence and growth
          </div>
        </section>
        <section id="services" >
          Services
        </section>
      </div>
    </div>)
  }
}
