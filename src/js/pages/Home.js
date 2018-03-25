import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {}

  handleAdd() {
    const newItems = this.state.items.concat([prompt('Enter some text')])
    this.setState({items: newItems})
  }

  handleRemove(i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({items: newItems})
  }

  render() {

    // const items = this.state.items.map((item, i) => (<div key={item} onClick={() => this.handleRemove(i)}>
    //   {item}
    // </div>))

    return (<div>
      <div id='banner1' className='banner'>
        <h1>foo</h1>
        <h2>bar</h2>
      </div>

      {/* <button onClick={this.handleAdd}>Add Item</button>
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>

        {items}
      </ReactCSSTransitionGroup> */
      }
    </div>)
  }
}
