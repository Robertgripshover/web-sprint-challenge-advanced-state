import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {
    input,
    inputChange,
    postQuiz,
    question_text,
    true_answer_text,
    false_answer_text
  } = props


  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
  }

  //my testing console.log VVV
  console.log(
    question_text,
    true_answer_text,
    false_answer_text
    )


  // const submitButtonActive = () => {
  //   if (
  //       question_text.value.trim().length > 0
  //    && true_answer_text.value.trim().length > 0
  //    && false_answer_text.value.trim().length > 0)
  //     return {}
  // }

    const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(question_text, true_answer_text, false_answer_text)
  }



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
    input: state.form,
    question_text: state.form,
    true_answer_text: state.form,
    false_answer_text: state.form
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
