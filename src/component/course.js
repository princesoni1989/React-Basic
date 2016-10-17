/**
 * Created by ttnd on 17/10/16.
 */

import React from 'react'

export default class Course extends  React.Component{

  render(){
    let course = this.props.course
    return(
        <tr>
          <th>{course.id}</th>
          <th>{course.title}</th>
          <th>{course.authorId}</th>
          <th>{course.category}</th>
        </tr>
    )
  }
}
