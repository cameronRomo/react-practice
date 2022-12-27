import React from 'react';

import Button from './Button';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    }
  }

  startTimer = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time += 1
      }))
    }, 1000)
  }

  render() {
    return (
      <section>
        <h3>I've been running for: {this.state.time} seconds.</h3>
        <Button handleClick={this.startTimer} buttonName="Click to Start" />
      </section>
    )
  }
}