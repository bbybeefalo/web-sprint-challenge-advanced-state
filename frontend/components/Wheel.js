import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import { connect } from 'react-redux';

function Wheel(props) {

  const { moveClockwise, moveCounterClockwise } = props;

  const clockwiseClick = () => {
    moveClockwise();
    console.log(props.state);
  }

  const counterClockwiseCLick = () => {
    moveCounterClockwise();
    console.log(props.state)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div 
        className={`cog ${props.state === 0 ? ' active': ''}`} 
        style={{ "--i": 0 }}>
          {props.state === 0 ? "B" : ""}
        </div>
        <div 
        className={`cog ${props.state === 1 ? ' active': ''}`} 
        style={{ "--i": 1 }}>
          {props.state === 1 ? "B" : ""}
        </div>
        <div 
        className={`cog ${props.state === 2 ? ' active': ''}`} 
        style={{ "--i": 2 }}>
          {props.state === 2 ? "B" : ""}
        </div>
        <div 
        className={`cog ${props.state === 3 ? ' active': ''}`} 
        style={{ "--i": 3 }}>
          {props.state === 3 ? "B" : ""}
        </div>
        <div 
        className={`cog ${props.state === 4 ? ' active': ''}`} 
        style={{ "--i": 4 }}>
          {props.state === 4 ? "B" : ""}
        </div>
        <div 
        className={`cog ${props.state === 5 ? ' active': ''}`} 
        style={{ "--i": 5 }}>
          {props.state === 5 ? "B" : ""}
        </div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockwiseCLick} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return({
    state: state.wheel
  })
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)