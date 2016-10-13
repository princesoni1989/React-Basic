import React from 'react'

class Body extends React.Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.increaseCount = this.increaseCount.bind(this)
  }
  increaseCount(){
    console.log("insiseee", this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log("insiseee", this.state.count)

  }
  render() {
    return (
      <div>
        <h1> This is body {this.state.count}</h1>
        <button onClick={this.increaseCount}> Click Me</button>
      </div>
    )
  }
}

export default Body
