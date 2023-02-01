import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { useState } from 'react'

export function Form(props) {

  const {
    newForm, //<<< added 'newForm' as an experiment, can return to normal if removed
    question_text,
    true_answer_text,
    false_answer_text, 
    inputChange,
    postQuiz,
  } = props

  
  const [count, setCount] = useState(0) //<<< I am using this for now, to try and 
  //make the submit button be active or not.
  //if the count is greater than the number 1 it will be deactivated. If the 
  //count is less than 1 then it will be deactivated. 
  


  const activateSubmitButton = () => {
    if(question_text.trim().length > 0 && true_answer_text.trim().length > 0 && false_answer_text.trim().length > 0) {
      return setCount(1)
    }
    else if(question_text.trim().length === 0 && true_answer_text.trim().length === 0 && false_answer_text.trim().length === 0) {
      return setCount(0)
    }
  }


  const onChange = evt => {
    const name = evt.target.id
    const value = evt.target.value
    inputChange(name, value)
    activateSubmitButton()
  }

  
  const onSubmit = evt => {
      evt.preventDefault()
      postQuiz(question_text, true_answer_text, false_answer_text)
      setCount(0)
  }

 

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={newForm.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={newForm.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={newForm.newFalseAnswer} placeholder="Enter false answer" />

    <p>Button active if not zero: {count}</p>

     <button id="submitNewQuizBtn" disabled={count === 1 ? '' : 'disabled'}>Submit new quiz</button>
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
