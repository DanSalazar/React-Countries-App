import React, { useState, useEffect } from 'react'
import CountriesContainer from '../../Components/CountriesContainer/CountriesContainer'
import Form from '../../Components/Form/Form'
import { AppContainer } from './style'
import getCountries from '../../Services/getCountries'
import countriesFilter from '../../Services/Filter'

function Home() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    getCountries().then(setCountries)
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleRegionChange = (value) => {
    setRegion(value)
  }

  const filter = countriesFilter(countries, name, region)

  return (
      <AppContainer>
        <Form
          handleNameChange={handleNameChange} 
          handleRegionChange={handleRegionChange} 
        />
        <CountriesContainer countries={filter}/>
      </AppContainer>
  )
}

export default Home
