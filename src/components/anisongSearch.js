import React from 'react'

import { SearchInput } from './searchInput'
import { SearchResult } from './searchResult'

export class AnisongSearch extends React.Component {
  state = {
    loading: true,
    currentInput: '',
  }

  handleInputChange = (event) => {
    this.setState({
      currentInput: event.target.value
    })
  }

  componentDidMount() {
    this.data = require('../data.json')
    console.log(this.data)
    this.setState({
      loading: false,
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='anisong-search'>
          Loading...
        </div>
      )
    } else {
      return (
        <div className='anisong-search'>
          <SearchInput handleInputChange={this.handleInputChange}/>
          <br/>
          <SearchResult data={this.data} input={this.state.currentInput}/>
        </div>
      );
    }
  }
}
