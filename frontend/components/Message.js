import React, { useEffect } from 'react'
import * as actions from '../state/action-creators'



export default function Message(props) {

  const {setMessage} = props
  

  return <div id="message">Nice job!</div>




}







// export default connect(st => ({
//   initialQuizState: st.quiz.initialQuizState,
//   initialSelectedAnswerState: st.selectedAnswer.initialSelectedAnswerState,

// }), {

//   setMessage: actions.setMessage

// })(Message)
