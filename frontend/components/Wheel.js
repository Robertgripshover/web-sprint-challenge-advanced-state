import React from 'react'
import {connect} from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

//NOTICE 1/16/2023 
//I AM PRETTY SURE THAT THIS WHOLE PAGE IS WORKING PERFECTLY AND NOTHING NEEDS CHANGED.
//YOU NEED TO FINISH WORKING ON THE REDUCER.JS. IN THERE YOU NEED TO 
//MAKE IT SO THAT THE INITIAL WHEEL STATE ACTUALY UPDATES.
 
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

      <div>initialWheelState at: {`${initialWheelState}`}</div>{/*This div is for experimenting, it can be removed after  */}

      <div id="wheel">
        <div className={initialWheelState === 0 ? "cog active" : 'cog'} style={{ "--i": 0 }}>{initialWheelState === 0 ? "B" : ''}</div>
        <div className={initialWheelState === 1 ? "cog active" : 'cog'} style={{ "--i": 1 }}>{initialWheelState === 1 ? "B" : ''}</div>
        <div className={initialWheelState === 2 ? "cog active" : 'cog'} style={{ "--i": 2 }}>{initialWheelState === 2 ? "B" : ''}</div>
        <div className={initialWheelState === 3 ? "cog active" : 'cog'} style={{ "--i": 3 }}>{initialWheelState === 3 ? "B" : ''}</div>
        <div className={initialWheelState === 4 ? "cog active" : 'cog'} style={{ "--i": 4 }}>{initialWheelState === 4 ? "B" : ''}</div>
        <div className={initialWheelState === 5 ? "cog active" : 'cog'} style={{ "--i": 5 }}>{initialWheelState === 5 ? "B" : ''}</div>
      </div>  
      {/* --i is a custom CSS property, no need to touch that nor the style object */}

      <div id="keypad">
        <button onClick={handleCounterClockWiseClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClockWiseClick} id="clockwiseBtn">Clockwise</button>
      </div>

   </div>

  )

}


const mapStateToProps = state => {
  return {
    initialWheelState: state.wheel.initialWheelState
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)