import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'

 function Quiz(props) {

  const {
    newQuiz,
    fetchQuiz,
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
              <div className={true ? "answer selected" : "answer"}
                   >
                    {newQuiz.answers[0].text}
                <button>
                  {true ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={false ? "answer selected" : "answer"}
                   >
                     {newQuiz.answers[1].text}
                <button>
                {true ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>



         
            {/* {
              newQuiz.answers.map(answer => (
                    <div key={answer.answer_id} className={answer_id === answer.answer_id ? "answer selected" : "answer"}
                         onClick={() => selectAnswer(answer.answer_id)}
                    >
                  
                    <button>
                        {isOneActive ? 'SELECTED' : 'Select'}
                    </button>
              ))
            }
             */}



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

export default connect(mapStateToProps,
   {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer}
)(Quiz)
