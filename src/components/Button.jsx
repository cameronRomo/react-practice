import React from 'react';

const Button = ({handleClick, buttonName}) => (
  <button onClick={handleClick}>{buttonName}</button>
);

export default Button;
