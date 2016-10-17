import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Courses from './component/courses'
import {connect} from 'react-redux'
require('./style.css')

class App extends React.Component {
  constructor(){
    super()
    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    let {courses, surname, isFetching} = this.props
    return (
      <div >
        {isFetching ? <h1> Loading......</h1> : <Courses courses={courses}/>}

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("State>>>>>>>>>>", state)
 return {
   courses: state.courses,
   surname: ownProps.surname,
   isFetching: state.ajax
 }
}

export default connect(mapStateToProps)(App)

