import React from 'react';

import _ from 'lodash'

export default class NameList extends React.Component {
  constructor() {
    super();
    this.sate = {
      names: []
    }
  }

  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }

  render() {
    let {names} = this.state;

    return (
      <section>
        {_.map(names, (name) => (
          <h2>{name.first_name} {name.last_name}</h2>
        ))}
      </section>
    )
  }
}