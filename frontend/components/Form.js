import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {input, inputChange, postQuiz, question_text, true_answer_text, false_answer_payload} = props



  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
  }



  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(question_text, true_answer_text, false_answer_payload)
  }

  // onSubmit = evt => { // =============== 👉 [Code-Along 11.2] - step 1
  //   evt.preventDefault()
  //   const { quizForm, editQuestion, createQuestion } = this.props
  //   const payload = { ...quizForm, options: Object.values(quizForm.options) }
  //   const callback = quizForm.question_id ? editQuestion : createQuestion
  //   callback(payload, this.onRedirect('/'))
  // }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    input: state.form
 
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
