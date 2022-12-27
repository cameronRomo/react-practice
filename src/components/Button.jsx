import React from 'react';

export default class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button onClick={this.props.changeName}>{this.props.firstName}</button>
    )
  }
}