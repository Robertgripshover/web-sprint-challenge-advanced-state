// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE,
    RESET_FORM} from './action-types'



//DO NOT TOUCH ABOVE THIS LINE, ALL WORKING^^^


const initialWheelState = 0
function wheel(state = initialWheelState, action) {
 

  switch(action.type) {
    case MOVE_CLOCKWISE:
      
    if(state.initialWheelState === 5){
      return {initialWheelState: 0}
     }

    else {
      return {...state, 
        initialWheelState: state.initialWheelState + 1}
    }

    case MOVE_COUNTERCLOCKWISE:
      

     if(state.initialWheelState === 0){
      return {initialWheelState: 5}
     }

     else {
      return {...state, 
        initialWheelState: state.initialWheelState - 1}
     }

    default:
      return{
        ...state, 
        initialWheelState: initialWheelState
      } 
  }
}




//VVV this function set is working!! I just need to make it go back down to 
//when it goes over 5 or under 0

// const initialWheelState = 0
// function wheel(state = initialWheelState, action) {
 

//   switch(action.type) {
//     case MOVE_CLOCKWISE:
      
//         return{
//           ...state, 
//           initialWheelState: state.initialWheelState + 1
//         }


//     case MOVE_COUNTERCLOCKWISE:

//         return{
//           ...state, 
//           initialWheelState: state.initialWheelState - 1
//         }

//     default:
//       return{
//         ...state, 
//         initialWheelState: initialWheelState
//       } 
//   }
// }

//^^^ this function set is working!! I just need to make it go back down to 
//when it goes over 5 or under 0







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
