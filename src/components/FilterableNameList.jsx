import React from 'react';

import _ from 'lodash'

export default class FilterableNameList extends React.Component {
  constructor() {
    super();
    this.sate = {
      names: [],
      filterText: ""
    }
  }
  
  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }
  
  handleClick = (e) => {
    e.preventDefault();
  }
  
  nameFilter = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }

  handleBlur = () => {
    let {filterText, names} = this.state;
    if (filterText.length >= 3) {
      let filteredNames = _.filter(names, (name) => {
        let fullName = `${name.first_name} ${name.last_name}`
        return fullName.toLowerCase().includes(filterText.toLowerCase());
      })
      this.setState({
        names: filteredNames
      })
    }
  }
  
  render() {
    let {names} = this.state;

    return (
      <section>
        <form onBlur={this.handleBlur}>
          <input type='text' onChange={this.nameFilter}/>
        </form>
        {_.map(names, (name) => (
          <h2 key={name.first_name}><a href='#' onClick={this.handleClick}>{name.first_name} {name.last_name}</a></h2>
        ))}
      </section>
    )
  }
}