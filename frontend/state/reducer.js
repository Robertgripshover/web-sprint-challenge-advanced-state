// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE,
    MOVE_COUNTERCLOCKWISE,
    SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER, 
    SET_INFO_MESSAGE, 
    INPUT_CHANGE,
    RESET_FORM} from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:

    case MOVE_COUNTERCLOCKWISE:
        if (initialWheelState === 0){
          return {
            ...state, 
            initialWheelState: 5
          }
        }
        if (initialWheelState === 1){
          return {
            ...state, 
            initialWheelState: 0
          }
        }
        if (initialWheelState === 2){
          return {
            ...state, 
            initialWheelState: 1
          }
        }
        if (initialWheelState === 3){
          return {
            ...state, 
            initialWheelState: 2
          }
        }
        if (initialWheelState === 4){
          return {
            ...state, 
            initialWheelState: 3
          }
        }
        else if (initialWheelState === 5){
          return {
            ...state, 
            initialWheelState: 4
          }
        }
        default:
          return(state)

  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
