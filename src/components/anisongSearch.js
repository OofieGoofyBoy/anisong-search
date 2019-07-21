import React from 'react'

import { SearchInput } from './searchInput'
import { SearchResult } from './searchResult'

function debounceEvent(fn, delay) {
  let timer = null;
  return function() {
    const ctx = this
    const args = arguments
    args[0].persist()
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(ctx, args);
    }, delay);
  };
}

export class AnisongSearch extends React.Component {
  state = {
    loading: true,
    currentInput: '',
  }

  handleInputChange = debounceEvent((event) => {
    this.setState({
      currentInput: event.target.value.trim()
    })
  }, 300)

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
