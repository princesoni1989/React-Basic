/**
 * Created by ttnd on 17/10/16.
 */

import React from 'react'
import course from './course'

export default class Courses extends React.Component {

  render() {
    console.log("this.props.courses", this.props.courses)
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Title
            </th>
            <th>
              Author
            </th>
            <th>
              Category
            </th>

          </tr>

          </thead>


          <tbody>
          {
            this.props.courses.map((course) => {
              return(
                <tr>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              )
            })}


          </tbody>

        </table>

      </div>
    )
  }
}
