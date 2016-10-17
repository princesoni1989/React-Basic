/**
 * Created by ttnd on 17/10/16.
 */

import CourseApi from '../api/mockCourseApi'

import {FECTCHING_COURSES_COMPLETED, FETCHING_COURSES, FETCHING_COMPLETE} from '../constants'

export function fetchCoursesCompleted(courses) {
  return {
    type: FECTCHING_COURSES_COMPLETED,
    courses: courses

  }
}

export function fetchingCourses() {
  return {
    type: FETCHING_COURSES
  }
}
export function fetchingCourseCompleted(){
  return {
    type: FETCHING_COMPLETE
  }
}

export function getCourses() {
  return dispatch => {
    dispatch(fetchingCourses())
    CourseApi.getAllCourses().then(function (courses) {
      dispatch(fetchingCourseCompleted())
      dispatch(fetchCoursesCompleted(courses))
    })
  }
}

