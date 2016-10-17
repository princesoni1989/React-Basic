/**
 * Created by ttnd on 17/10/16.
 */

import {combineReducers} from 'redux'
import Courses from './courses'
import Ajax from './Ajax'

const reducer  = combineReducers({
  courses: Courses,
  ajax: Ajax
})

export default reducer
