import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Button from './Button';
import Timer from './timer/Timer';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Cam",
      lastName: "Romo",
      isTimerMounted: true
    }
  }

  changeName = () => {
    this.setState({
      firstName: "Cameron"
    })
  }

  toggleTimers = () => {
    this.setState(prevState => ({
      isTimerMounted: !prevState.isTimerMounted
    }));
  }
  
  render() {
    return (
      <header>
        <h1>Welcome to my site!</h1>
        <h2>Happy to have you here,</h2>
        <h2>{this.state.firstName} :D</h2>
        <Button handleClick={this.changeName} buttonName={this.state.firstName} />
        <p>{lorem.generateParagraphs(2)}</p>
       
        {this.state.isTimerMounted ? 
          <div>
            <Timer />
            <Timer />
            <Timer />
          </div>
          : null
        }

        <Button buttonName="Toggle timers" handleClick={this.toggleTimers}/>
      </header>
    )
  }
}