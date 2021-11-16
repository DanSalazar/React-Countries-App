import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.75em;
  animation-name: Show;
  animation-timing-function: ease-in-out;
  animation-duration: 0.2s;

  @media screen and (min-width: 768px) {
    padding: 1em 4.25em;
  }

  @media screen and (min-width: 1280px) {
    height: 32.5em;
  }

  @keyframes Show {
    0% {
      transform: scale(0.9);
      opacity: 0.8;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`
