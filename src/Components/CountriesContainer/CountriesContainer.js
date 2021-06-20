import React from 'react';
import { Countries, Ancle } from './style';
import Country from '../Country/Country';

function CountriesContainer( { countries} ) {

    return (
        <Countries>
                {
                    countries.map(country => <Ancle key={country.numericCode}  to={`/${country.name}`}>
                            <Country
                            svg={country.flag}
                            name={country.name}
                            region={country.region} 
                            capital={country.capital}
                            population={country.population}
                            />
                    </Ancle>)
                }
        </Countries>
    )
}

export default React.memo(CountriesContainer)
