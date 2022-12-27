import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Button from './Button';

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
      lastName: "Romo"
    }
  }

  changeName = () => {
    this.setState({
      firstName: "Cameron"
    })
  }
  
  render() {
    return (
      <header>
        <h1>Welcome to my site!</h1>
        <h2>Happy to have you here,</h2><br></br>
        <h2>{this.state.firstName} :)</h2>
        <Button changeName={this.changeName} firstName={this.state.firstName} />
        <p>{lorem.generateParagraphs(2)}</p>
      </header>
    )
  }
}