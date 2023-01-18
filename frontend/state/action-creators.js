// ❗ You don't need to add extra action creators to achieve MVP

import * as actionTypes from './action-types'
import axios from 'axios'


export function moveClockwise() {
  return({type: actionTypes.MOVE_CLOCKWISE}) 
 }

export function moveCounterClockwise() {
  return({type: actionTypes.MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer() { 
  return({type: actionTypes.SET_SELECTED_ANSWER})
}

export function setMessage(message) {
    const payload = message
    return {type: actionTypes.SET_INFO_MESSAGE, payload}
 }

export function setQuiz(newQuiz) { 
  const payload = newQuiz 
return {type: actionTypes.SET_QUIZ_INTO_STATE, payload}
}



export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(res.data))
        dispatch(setMessage(res.data))
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
