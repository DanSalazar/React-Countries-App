import { CountryFlag, CountryCard, CountryBody } from './style'

function Country({ svg, name, region, capital, population }) {
  return (
    <CountryCard>
      <CountryFlag alt='Flag' src={svg} loading='lazy' />
      <CountryBody>
        <h4>{name}</h4>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>{' '}
        </p>
        <p>
          Capital: <span>{capital && capital[0]}</span>
        </p>
      </CountryBody>
    </CountryCard>
  )
}

export default Country
