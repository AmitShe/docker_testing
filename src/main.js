import React, { Component } from 'react'

export default class Main extends Component {

  state = {
    show: false
  }

  changeShow = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    const { show } = this.state

    return (
      <div className="App">
        <button onClick={this.changeShow}>click me now</button>
        { show && <text className="Texting"> this is a test for docker lable</text>}
      </div>
    )
  }
}