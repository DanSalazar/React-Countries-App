import { memo } from 'react'
import { Countries } from './style'
import Country from '../Country'
import { A } from '../commons/styles'

function CountriesContainer({ countries }) {
  return (
    <Countries>
      {countries.map((country, id) => (
        <A key={id} to={'/' + country.name.common.toLowerCase()}>
          <Country
            svg={country.flags.png}
            name={country.name.official}
            region={country.region}
            capital={country.capital}
            population={country.population}
          />
        </A>
      ))}
    </Countries>
  )
}

export default memo(CountriesContainer)
