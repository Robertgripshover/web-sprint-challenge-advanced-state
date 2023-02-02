import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {
    newForm, //<<< added 'newForm' as an experiment, can return to normal if removed
    question_text,
    true_answer_text,
    false_answer_text, 
    inputChange,
    postQuiz,
  } = props

  
   
  const isDisabled = () => {
    if(question_text.trim().length > 0 && true_answer_text.trim().length > 0 && false_answer_text.trim().length > 0) {
      return false
    }
    else if(question_text.trim().length === 0 && true_answer_text.trim().length === 0 && false_answer_text.trim().length === 0) {
      return true
    }
  }

  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
  }
  
  const onSubmit = evt => {
      evt.preventDefault()
      postQuiz(question_text, true_answer_text, false_answer_text)
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={newForm.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={newForm.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={newForm.newFalseAnswer} placeholder="Enter false answer" />

     <button id="submitNewQuizBtn" disabled={isDisabled()}>Submit new quiz</button>
    </form>
  )
}


const mapStateToProps = state => {
  return {
    newForm: state.form,
    question_text: state.form.newQuestion,
    true_answer_text: state.form.newTrueAnswer,
    false_answer_text: state.form.newFalseAnswer
   }
}


export default connect(mapStateToProps, actionCreators)(Form)
