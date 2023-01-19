import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actions from '../state/action-creators'



function Message(props) {

  const {setMessage, message} = props

  useEffect(() => {
    // setMessage()
  }, [])
  

  return <div id="message">Message: </div>




}







export default connect(st => ({
  message: st.message
}), {

  setMessage: actions.setMessage

})(Message)
