import useCountry from '../../hooks/useCountry'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { DetailContainer, ButtonDetail } from './style'
import DetailCountry from '../../Components/Detail'
import Spinner from '../../Components/Spinner/Spinner'
import { LeftArrowIcon } from '../../Components/commons/icons'

function Detail() {
  const route = useRouteMatch()
  const history = useHistory()
  const { country, loading } = useCountry(route.params.name)

  return (
    <DetailContainer>
      <ButtonDetail onClick={() => history.goBack()}>
        <LeftArrowIcon/> Back
      </ButtonDetail>
      {loading ? <Spinner/> : <DetailCountry country={country} />}
    </DetailContainer>
  )
}

export default Detail
