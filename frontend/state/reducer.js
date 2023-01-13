// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE,
    RESET_FORM} from './action-types'
import { moveClockwise, moveCounterClockwise } from './action-creators'



const initialWheelState = 0
function wheel(state = initialWheelState, action) {
 

  switch(action.type) {
    case MOVE_CLOCKWISE:
      return{
        ...state, 
        initialWheelState: initialWheelState + 1
      }

    case MOVE_COUNTERCLOCKWISE:
      return{
        ...state, 
        initialWheelState: initialWheelState - 1
      }

    default:
      return(state)  
  }
}
//^^^ I think that this above function is actually working. I just have not been able to 
//hook this function up to my DOM to hit it with the buttons yet.












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
