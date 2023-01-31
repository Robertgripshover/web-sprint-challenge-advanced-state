import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {
    
    wholeFormText, //<<< added 'wholeFormText' as an experiment, can return to normal if removed
    inputChange,
    postQuiz,
    // question_text,
    // true_answer_text,
    // false_answer_text
  } = props


  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
  }

  //my testing console.log VVV




  
  const question_text = wholeFormText.newQuestion
  const true_answer_text = wholeFormText.newTrueAnswer
  const false_answer_text = wholeFormText.newFalseAnswer

  console.log(question_text)
  console.log(true_answer_text)
  console.log(false_answer_text)

 

    const onSubmit = evt => {
    
    evt.preventDefault()
    postQuiz(question_text, true_answer_text, false_answer_text)
    // postQuiz(wholeFormText)
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



  // const submitButtonActive = () => {
  //   if (
  //       question_text.value.trim().length > 0
  //    && true_answer_text.value.trim().length > 0
  //    && false_answer_text.value.trim().length > 0)
  //     return {}
  // }



const mapStateToProps = state => {
  return {
    wholeFormText: state.form
    // question_text: state.form,
    // true_answer_text: state.form,
    // false_answer_text: state.form
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
