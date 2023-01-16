// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE,
    RESET_FORM} from './action-types'
import { moveClockwise, moveCounterClockwise } from './action-creators'










//DO NOT TOUCH ABOVE THIS LINE, ALL WORKING^^^

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
        initialWheelState: initialWheelState + 2
      }

    default:
      return(state)  
  }
}

//this blob is working^^^ commented out for testing

// const initialWheelState = ['', '', '', 'B', '', ''] //THIS just used to be a 0, so if you end up needing to go back to normal you can just delete it. 
// function wheel(state = initialWheelState, action) {
//   const newWheelState = [...initialWheelState]
  
//   switch(action.type) {
//     case MOVE_CLOCKWISE:
//       newWheelState.unshift(newWheelState.pop())
//       return{
//         ...state, 
//         initialWheelState: newWheelState
//       }

//     case MOVE_COUNTERCLOCKWISE:
//       newWheelState.push(newWheelState.shift())
//       return{
//         ...state, 
//         initialWheelState: newWheelState
//       }

//     default:
//       return(state)  
//   }
// }
//EXPERIMENTAL^^^^









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
