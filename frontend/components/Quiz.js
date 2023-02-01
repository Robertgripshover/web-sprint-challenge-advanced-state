import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const {
    answer_id,
    newQuiz,
    fetchQuiz,
    selectedAnswer,
    selectAnswer,
    postAnswer,
  } = props


  useEffect(() => {
     fetchQuiz()
  }, [])

  
  const onAnswer = () => {
    const {quiz_id} = newQuiz
    postAnswer(quiz_id, answer_id)
  }

  
  return (
    
    <div id="wrapper">

      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        newQuiz ? (

          <>

            <h2>{newQuiz.question}</h2>

            <div id="quizAnswers">

              <div className={newQuiz.answers[0].answer_id === selectedAnswer ? "answer selected" : "answer"}>

                      {newQuiz.answers[0].text}

                  <button onClick={() => selectAnswer(newQuiz.answers[0].answer_id)}>
                    {newQuiz.answers[0].answer_id === selectedAnswer ? "SELECTED" : "Select"}                  
                  </button>            
              </div>
              

                <div className={newQuiz.answers[1].answer_id === selectedAnswer ? "answer selected" : "answer"}>

                        {newQuiz.answers[1].text}

                    <button onClick={() => selectAnswer(newQuiz.answers[1].answer_id)}>
                    {newQuiz.answers[1].answer_id === selectedAnswer ? 'SELECTED' : 'Select'}
                    </button>
              </div>
          
            </div>

            <button id="submitAnswerBtn" onClick={onAnswer} disabled={!selectedAnswer}>Submit answer</button>

          </>


        ) : 'Loading next quiz...'
      }

    </div>

  )
}

const mapStateToProps = state => {
  return {
    newQuiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    answer_id: state.selectedAnswer
  }
}

export default connect(mapStateToProps, actions)(Quiz)
