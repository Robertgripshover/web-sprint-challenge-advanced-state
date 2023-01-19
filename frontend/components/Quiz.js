import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const [isOneActive, setOneActive] = useState(false)
  const [isTwoActive, setTwoActive] = useState(false)

  const {initialQuizState, initialSelectedAnswerState, setQuiz, selectAnswer, newQuiz} = props

  // useEffect(() => {
  //   setQuiz()
  // }, [])


  const toggleOneButtonClass = () => {
    if(isOneActive === false) {
      setOneActive(true)
      setTwoActive(false)
    }
  }

  const toggleTwoButtonClass = () => {
  if(isTwoActive === false) {
      setTwoActive(true)
      setOneActive(false)
    }
  }
  


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What bear is best?</h2>

            {/*I need to make a turnary statement that says whether or not 
            the button is clicked makes the className change from either 
            "answer seleted" or "answer"*/}

            <div id="quizAnswers">
              <div className={isOneActive ? "answer selected" : "answer"}
                   onClick={toggleOneButtonClass}>
                A function
                <button>
                  {isOneActive ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={isTwoActive ? "answer selected" : "answer"}
                   onClick={toggleTwoButtonClass}>
                An elephant
                <button>
                {isTwoActive ? 'SELECTED' : 'Select'}
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
