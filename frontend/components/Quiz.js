import React from 'react'
import {connect} from 'react-redux'
import { selectAnswer, setQuiz } from '../state/action-creators'

 function Quiz(props) {

  const {initialQuizState, initialSelectedAnswerState, setQuiz, selectAnswer} = props

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

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

const mapStateToProps = state => {
  return {
    initialQuizState: state.quiz.initialQuizState,
    initialSelectedAnswerState: state.selectedAnswer.initialSelectedAnswerState
  }
}

export default connect(mapStateToProps, {setQuiz, selectAnswer})(Quiz)
