import React from 'react'
import {connect} from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import initialWheelState from '../state/reducer'
import wheel from '../state/reducer'
import {useReducer} from 'react'


 
function Wheel(props) {

  const [state, dispatch] = useReducer(wheel, initialWheelState)

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={moveClockwise} id="clockwiseBtn">Clockwise</button>
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