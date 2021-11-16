import React from 'react'
import { Countries, Ancle } from './style'
import Country from '../Country/Country'

function CountriesContainer({ countries }) {
  return (
    <Countries>
      {countries.map((country, id) => (
        <Ancle key={id} to={'/' + country.name.official}>
          <Country
            svg={country.flags.png}
            name={country.name.official}
            region={country.region}
            capital={country.capital}
            population={country.population}
          />
        </Ancle>
      ))}
    </Countries>
  )
}

export default React.memo(CountriesContainer)
