/**
 * Created by ttnd on 17/10/16.
 */

import {FETCHING_COURSES, FETCHING_COMPLETE} from '../constants'

export default function Ajax(state = false, action) {
  switch (action.type) {
    case FETCHING_COURSES:
      return true
    case FETCHING_COMPLETE:
      return false
    default:
      return state
  }
}
