import React from 'react'
import {
    FormContainer,
    Icon,
    InputContainer,
    InputSearch
} from './style'
import Dropdown from '../Dropdown/Dropdown'

function Form({ handleNameChange, handleRegionChange }) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
            <Icon className="fas fa-search" />
                <InputSearch 
                    onChange={handleNameChange} 
                    type="text"
                    name="search"
                    title="undefined"
                    aria-label="undefined" 
                    placeholder="Search for a country..."/>
            </InputContainer>
            <Dropdown handleRegionChange={handleRegionChange} />
            
        </FormContainer>
    )
}

export default Form
