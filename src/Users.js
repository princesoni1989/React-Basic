import React from 'react'

export default class Users extends React.Component{
  render(){
    return(
      <div>
        {this.props.users.map((elm, index) => {
          return (<h5 key={index}> User name : {elm}</h5>)
        })}

      </div>
    )
  }
}
