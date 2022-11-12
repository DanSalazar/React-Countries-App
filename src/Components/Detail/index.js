import {
  CountryDetails,
  CountryDetailsInfo,
  DetailContainer,
  Flag,
  AncleDetail,
  CountryNotFound
} from './style'

function DetailCountry({ country }) {
  if (!country) return <CountryNotFound>Country not found</CountryNotFound>

  return (
    <DetailContainer>
      <Flag src={country.flags.png} />
      <CountryDetails>
        <h2> {country.name.official} </h2>
        <CountryDetailsInfo>
          <div>
            <p>
              Native Name: <span> {country.name.official} </span>
            </p>
            <p>
              Population: <span> {country.population} </span>
            </p>
            <p>
              Region: <span> {country.region} </span>
            </p>
            <p>
              Sub Region: <span> {country.subregion} </span>
            </p>
            <p>
              Capital: <span> {country.capital[0]} </span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span> {country.tld[0]} </span>
            </p>
            <p>
              Currencies:{' '}
              <span> {Object.values(country.currencies)[0].name} </span>
            </p>
            <p>
              Languages:{' '}
              <span>
                {Object.values(country.languages).map((country) => country + ' ')}
              </span>
            </p>
          </div>
        </CountryDetailsInfo>
        <h3> Border countries: </h3>
        {country.borders?.map((country, index) => (
          <AncleDetail key={index} to={`/${country.toLowerCase()}`}>
            {country}
          </AncleDetail>
        ))}
      </CountryDetails>
    </DetailContainer>
  )
}

export default DetailCountry
