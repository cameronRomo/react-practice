import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Timer from './timer/Timer';
import NameList from './NameList';

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
  }
  
  render() {
    return (
      <header>
        <h1>Welcome to my site!</h1>
        <h2>Happy to have you here,</h2>
        <p>{lorem.generateParagraphs(2)}</p>
        <Timer />
        <NameList names={this.props.names} />
      </header>
    )
  }
}