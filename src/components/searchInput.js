import React from 'react'

export const SearchInput = (props) => (
  <input className='search-input' type='text' onChange={props.handleInputChange}/>
)
