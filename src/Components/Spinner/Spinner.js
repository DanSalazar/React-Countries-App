import { Loader, SpinnerContainer } from './style'

function Spinner() {
  return (
    <SpinnerContainer>
      <Loader viewBox='0 0 50 50'>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='4'
        />
      </Loader>
    </SpinnerContainer>
  )
}

export default Spinner
