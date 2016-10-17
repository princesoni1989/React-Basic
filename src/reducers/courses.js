/**
 * Created by ttnd on 17/10/16.
 */

import {FECTCHING_COURSES_COMPLETED, FETCHING_COURSES} from '../constants'

export default function Courses(state = [], action) {
  switch (action.type) {
    case FECTCHING_COURSES_COMPLETED :
      return action.courses
    case 'ADD_CORSE':
      let oldState = Object.assign({}, state)
      oldState.courses.push(action.course)
      return oldState
    default:
      return state

  }
}
