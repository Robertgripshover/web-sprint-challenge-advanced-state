import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const {
    newQuiz,
    fetchQuiz,
    selectedAnswer,
    selectAnswer
  } = props


  useEffect(() => {
     fetchQuiz()
  }, [])

  console.log(newQuiz)


  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        newQuiz ? ( //<<<< Right here at the 'true' spot is where I need to be newQuiz eventually
          <>
            <h2>{newQuiz.question}</h2>



             <div id="quizAnswers">
              <div className={newQuiz.answers[0].answer_id === selectedAnswer ? "answer selected" : "answer"}
                  >
                    {newQuiz.answers[0].text}
                <button onClick={() => selectAnswer(newQuiz.answers[0].answer_id)}>
                  {newQuiz.answers[0].answer_id === selectedAnswer ? "SELECTED" : "select"}
                  
                </button>
                {console.log(selectedAnswer)}
              </div>
              

              <div className={false ? "answer selected" : "answer"}
                   >
                     {newQuiz.answers[1].text}
                <button>
                {false ? 'SELECTED' : 'Select'}
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
    newQuiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, actions)(Quiz)
