import React from 'react'
import { SearchContainer, InputContainer, InputSearch } from './style'
import Dropdown from '../Dropdown/Dropdown'
import { SearchIcon } from '../commons/icons'

function Search({ handleNameChange, handleRegionChange }) {
  return (
    <SearchContainer>
      <InputContainer>
        <SearchIcon/>
        <InputSearch
          onChange={handleNameChange}
          type='text'
          placeholder='Search for a country...'
        />
      </InputContainer>
      <Dropdown handleRegionChange={handleRegionChange} />
    </SearchContainer>
  )
}

export default Search
