import React from 'react'
import Users from './Users'
require('./style.css')

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: 'Prince Soni',
      users: ['pooja', 'arun', 'Rohit'],
      count: 0,
      showState: false
    }
    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div >
        <h2 id="appComp" className="userName"> This is App component {this.state.name}</h2>
        <h1 > This is Count {this.state.count}</h1>
        <h1 name={this.state.showState ? 'prince' : 'soni'}> This is surname {this.props.surname}</h1>
        <button onClick={this.incrementCount}>Increament</button>
        {this.state.showState ? <div> Congtz.....</div> : ''}
        <Users users={this.state.users}/>
      </div>
    )
  }
}

export default App
