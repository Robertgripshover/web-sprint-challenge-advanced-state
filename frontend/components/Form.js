import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {
    newForm, //<<< added 'wholeFormText' as an experiment, can return to normal if removed
    inputChange,
    postQuiz,
  } = props


  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
  }


   
  // const question_text = wholeFormText.newQuestion
  // const true_answer_text = wholeFormText.newTrueAnswer
  // const false_answer_text = wholeFormText.newFalseAnswer


  const onSubmit = evt => {
      evt.preventDefault()
      postQuiz(newForm)
  }



  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={newForm.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={newForm.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={newForm.newFalseAnswer} placeholder="Enter false answer" />



     <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}


const mapStateToProps = state => {
  return {
    newForm: state.form,
   }
}

export default connect(mapStateToProps, actionCreators)(Form)
