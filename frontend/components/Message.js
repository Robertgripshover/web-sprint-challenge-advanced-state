import React from 'react'
import {connect} from 'react-redux'


function Message(props) {

  const {infoMessage} = props

  return (
    <div id="message">{infoMessage}</div>
  )
   
}


export default connect(state => (
    {
      infoMessage: state.infoMessage
    }
))(Message)
