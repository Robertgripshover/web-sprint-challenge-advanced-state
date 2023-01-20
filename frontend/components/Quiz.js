import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { fetchQuiz } from '../state/action-creators'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const { stats, fetchQuiz, initialQuizState} = props

  const [isOneActive, setOneActive] = useState(false)
  const [isTwoActive, setTwoActive] = useState(false)

  useEffect(() => {
    fetchQuiz()
  }, [])
  console.log(stats)




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
            <h2>Quiz name goes here</h2>

            <div id="quizAnswers">
              <div className={isOneActive ? "answer selected" : "answer"}
                   onClick={toggleOneButtonClass}>
                    question 1 from API goes here 
                <button>
                  {isOneActive ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={isTwoActive ? "answer selected" : "answer"}
                   onClick={toggleTwoButtonClass}>
                     question 1 from API goes here 
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
    stats: state.stats
  }
}

export default connect(mapStateToProps, {fetchQuiz: actions.fetchQuiz})(Quiz)
