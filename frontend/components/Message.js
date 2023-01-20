import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'



function Message(props) {

  const {fetchQuiz, setMessage, message} = props
  

  // useEffect(() => {
  //   fetchQuiz()
  // }, [])
  // console.log(message)
  

  return <div id="message">Message from API goes here </div>


  

}








export default connect(st => ({
  message: st.message
}), {
  fetchQuiz: actions.fetchQuiz,
  setMessage: actions.setMessage

})(Message)
