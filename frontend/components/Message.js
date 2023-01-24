import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'



function Message(props) {

  const {infoMessage} = props

  
  
  useEffect(() => {

  })

  

  return <div id="message">{infoMessage}
  <button>Click to get Message</button>
  </div>
 
  

}








export default connect(state => ({
  infoMessage: state.infoMessage
}), {postQuiz: actions.postQuiz})(Message)
