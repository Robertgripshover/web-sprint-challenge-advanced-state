// ❗ You don't need to add extra action creators to achieve MVP

import * as actionTypes from './action-types'
import axios from 'axios'


export function moveClockwise() {
  return({type: actionTypes.MOVE_CLOCKWISE}) 
}


export function moveCounterClockwise() {
  return({type: actionTypes.MOVE_COUNTERCLOCKWISE})
}


export function selectAnswer(answer_id) { 
  const payload = answer_id
  return({type: actionTypes.SET_SELECTED_ANSWER, payload})
}


export function setMessage(message) {
    const payload = message
    return ({type: actionTypes.SET_INFO_MESSAGE, payload})
}


export function setQuiz(newQuiz) { 
  const payload = newQuiz 
return ({type: actionTypes.SET_QUIZ_INTO_STATE, payload})
}


export function inputChange(name, value) {
  const payload = {name, value}
  return ({type: actionTypes.INPUT_CHANGE, payload})
}


export function resetForm(reset) {
  const payload = {reset}
  return ({type: actionTypes.RESET_FORM, payload})
}
 

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(null))
        dispatch(setQuiz(res.data))
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}


export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id, answer_id})
      .then(res => {
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message))
        dispatch(fetchQuiz())
      })      
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}


export function postQuiz(question_text, true_answer_text, false_answer_text) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {question_text, true_answer_text, false_answer_text})
      .then(res => {
        dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
        dispatch(resetForm())
      })
      .catch(err => {
        dispatch(setMessage(err.message))
      })    
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
