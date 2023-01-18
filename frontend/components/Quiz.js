import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const {initialQuizState, initialSelectedAnswerState, setQuiz, selectAnswer, newQuiz} = props

  // useEffect(() => {
  //   setQuiz()
  // }, [])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{newQuiz}</h2>

            {/*I need to make a turnary statement that says whether or not 
            the button is clicked makes the className change from either 
            "answer seleted" or "answer"*/}

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => ({
  initialQuizState: st.quiz.initialQuizState,
  initialSelectedAnswerState: st.selectedAnswer.initialSelectedAnswerState,
  newQuiz: st.newQuiz

}), {

  setQuiz: actions.setQuiz,
  setMessage: actions.setMessage

})(Quiz)
