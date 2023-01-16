import React from 'react'
import {connect} from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import {useReducer} from 'react'
import wheel from '../state/reducer'
import initialWheelState from '../state/reducer'
import reducer from '../state/reducer'


 
function Wheel(props) {

  const {initialWheelState, moveClockwise, moveCounterClockwise} = props

  const handleCounterClockWiseClick = () => {
    moveCounterClockwise()
  }

  const handleClockWiseClick = () => {
    moveClockwise()
  }

  return (
    <div id="wrapper">


      <div>Wheel at: {`${initialWheelState}`}</div>{/*This div is for experimenting */}


      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={handleCounterClockWiseClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClockWiseClick} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    initialWheelState: state.initialWheelState
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)