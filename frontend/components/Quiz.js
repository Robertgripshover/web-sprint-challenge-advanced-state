import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const { newQuiz, fetchQuiz} = props

  const [isOneActive, setOneActive] = useState(false)
  const [isTwoActive, setTwoActive] = useState(false)

  useEffect(() => {
     fetchQuiz()
  }, [])

  console.log(newQuiz)

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
        newQuiz ? ( //<<<< Right here at the 'true' spot is where I need to be newQuiz eventually
          <>
            <h2>{newQuiz.question}</h2>
          

            <div id="quizAnswers">
              <div className={isOneActive ? "answer selected" : "answer"}
                   onClick={toggleOneButtonClass}>
                    {newQuiz.answers[0].text}
                <button>
                  {isOneActive ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={isTwoActive ? "answer selected" : "answer"}
                   onClick={toggleTwoButtonClass}>
                     {newQuiz.answers[1].text}
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

const mapStateToProps = state => {
  return {
    newQuiz: state.quiz
  }
}

export default connect(mapStateToProps, {fetchQuiz: actions.fetchQuiz})(Quiz)
