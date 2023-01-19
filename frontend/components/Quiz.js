import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const [isOneActive, setOneActive] = useState(false)
  const [isTwoActive, setTwoActive] = useState(false)

  const { newQuiz, fetchQuiz} = props

  useEffect(() => {
    fetchQuiz()
  }, [])

  if(!newQuiz) return null


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



  //TODAY 1-20-2023 I need to use the newQuiz thing to pump my stuff coming in 
  //from the API
  


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{newQuiz.question}</h2>

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
  newQuiz: st.newQuiz

}), {

  fetchQuiz: actions.fetchQuiz

})(Quiz)
