import React from 'react';

export default class NameRow extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const {first_name, last_name} = this.props.name;
    return (
      <h3>{first_name} {last_name}</h3>
    )
  }
}