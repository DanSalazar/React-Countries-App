import { AppContainer } from './style'
import useCountries from '../../hooks/useCountries'
import Search from '../../Components/Search'
import Spinner from '../../Components/Spinner/Spinner'
import CountriesContainer from '../../Components/CountriesContainer/CountriesContainer'

function Home() {
  const { data, handleName, handleRegion, loading } = useCountries()

  return (
    <AppContainer>
      <Search
        handleNameChange={handleName}
        handleRegionChange={handleRegion}
      />
      {loading ? <Spinner/> : <CountriesContainer countries={data} /> }
    </AppContainer>
  )
}

export default Home
