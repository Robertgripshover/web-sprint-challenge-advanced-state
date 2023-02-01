// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as actionTypes from './action-types'


//IMPORTANT AS OF JAN 31 2023 I THINK THAT THIS REDUCER COMPONENT HAS EVERYTHING WORKING RIGHT


//My wheel reducer
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
 
  switch(action.type) {
    case actionTypes.MOVE_CLOCKWISE:
      if(state.initialWheelState === 5){
        return {initialWheelState: 0}
      }
      else {
        return {...state, 
          initialWheelState: state.initialWheelState + 1}
      }

    case actionTypes.MOVE_COUNTERCLOCKWISE:
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



//My message reducer
const initialMessageState = null
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case actionTypes.RESET_FORM:
      return initialMessageState
    case actionTypes.SET_INFO_MESSAGE:
      return action.payload 
    default:
      return state
  }
}


//My quiz reducer
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case actionTypes.RESET_FORM:
      return initialQuizState
    case actionTypes.SET_QUIZ_INTO_STATE:
      return action.payload
    default:
      return state
  }
}


//My selected answer reducer
const initialSelectedAnswerState = ''
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case actionTypes.SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}



//My form reducer
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: ''
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case actionTypes.RESET_FORM: 
      return initialFormState
    case actionTypes.INPUT_CHANGE: {
      const {name, value} = action.payload
      if (Object.keys(state).includes(name)) {
        return { ...state, [name]: value}
      }
      return state
    }
     
    default:
      return state
  }
}



export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
