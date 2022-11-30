import React, { useReducer } from 'react';
import reducer from '../state/reducer';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export default function Wheel(props) {

  const [state, dispatch] = useReducer(reducer);

  const handleClockwise = () => {
    dispatch(moveClockwise())
  }

  const handleCounterClockwise = () => {
    dispatch(moveCounterClockwise())
  }

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
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
