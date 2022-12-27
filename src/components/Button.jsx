import React from 'react';

const timerButtonName = (started) => (
  started ? "Stop Timer" : "Start Timer"
)

const Button = ({buttonName, timerStarted, handleClick}) => (
  <button onClick={handleClick}>{buttonName ? buttonName : timerButtonName(timerStarted)}</button>
);

export default Button;
