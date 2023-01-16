// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE,
    RESET_FORM} from './action-types'



//DO NOT TOUCH ABOVE THIS LINE, ALL WORKING^^^



//THE WORK NEEDS TO BE DONE HERE TO MAKE THE NUMBER GO UP AND KEEP GOING UPvvv

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
          initialWheelState: initialWheelState + 5
        }

    default:
      return{
        ...state, 
        initialWheelState: initialWheelState
      } 
  }
}

//THE WORK NEEDS TO BE DONE HERE TO MAKE THE NUMBER GO UP AND KEEP GOING UP^^^







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
