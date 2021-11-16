import React, { useState } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './style'

const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

function Dropdown({ handleRegionChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggler = () => {
    setIsOpen(!isOpen)
  }
  const [selectOption, setSelectOption] = useState(null)

  const handlerOption = (value) => () => {
    setSelectOption(value)
    handleRegionChange(value)
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggler}>
        <span>{selectOption || 'Filter by Region'} </span>{' '}
        <i className='fas fa-chevron-down' />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem key={index} onClick={handlerOption(option)}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
