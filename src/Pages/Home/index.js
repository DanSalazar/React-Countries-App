import React, { useState, useContext } from 'react';
import CountriesContainer from '../../Components/CountriesContainer/CountriesContainer';
import Form from '../../Components/Form/Form';
import { AppContainer } from './style';
import { countryContext } from '../../CountriesContext/countryContext';
import countriesFilter from '../../Services/Filter';

function Home() {
    const [region, setRegion] = useState('');
    const [name, setName] = useState('');

    const {countries} =  useContext(countryContext);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    
    const handleRegionChange = (value) => {
        setRegion(value)
    }

    const filtredCountries = countriesFilter(countries, name, region);

    return (
        <AppContainer>
            <Form
                handleNameChange={handleNameChange} 
                handleRegionChange={handleRegionChange} 
            />
            <CountriesContainer countries={filtredCountries} />
        </AppContainer>
    )
}

export default Home
