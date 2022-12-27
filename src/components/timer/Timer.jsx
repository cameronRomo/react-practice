import React from 'react';

import Button from '../Button';
import { TimerHeader } from './TimerHeader';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isStarted: false
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.startTimer(),
    1000)
  }

  componentWillUnmount() {
    this.endTimer();
  }
  
  startTimer = () => {
    this.setState((prevState) => ({
      time: prevState.time += 1,
    }))
    this.setState({
      isStarted: true
    })
  }

  endTimer = () => {
    clearInterval(this.timer)
    this.setState({
      isStarted: false
    })
  }

  handleClick = () => {
    this.state.isStarted ?
      this.endTimer() :
      this.timer = setInterval(
        () => this.startTimer,
      1000)
  }

  render() {
    return (
      <section>
        <TimerHeader time={this.state.time} />
        <Button handleClick={this.handleClick} timerStarted={this.state.isStarted} />
      </section>
    )
  }
}