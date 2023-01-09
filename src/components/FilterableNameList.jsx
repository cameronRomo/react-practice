import React from 'react';

import NameRow from './NameList/NameRow';
import _ from 'lodash';

export default class FilterableNameList extends React.Component {
  constructor() {
    super();
    this.sate = {
      names: [],
      filterText: "",
    }
  }
  
  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.filterText.length >= 3) {
      let filteredNames = _.filter(this.state.names, (name) => {
        let fullName = `${name.first_name} ${name.last_name}`
        return fullName.toLowerCase().includes(this.state.filterText.toLowerCase());
      })
      this.setState({
        names: filteredNames
      })
    }
  }

  clearInput = (e) => {
    e.preventDefault();
    this.setState({
      names: this.props.names,
      filterText: ""
    });
  }
  
  render() {
    let {names} = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name="filterText" value={this.state.filterText} onChange={e => this.handleChange(e)}/>
          <input type='submit' value="Submit" />
          <input type='reset' value="Reset" onClick={this.clearInput} />
        </form>
        {_.map(names, (name) => (
          <NameRow key={name.id} name={name} />
        ))}
      </section>
    )
  }
}