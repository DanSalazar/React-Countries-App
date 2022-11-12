import styled from 'styled-components'

export const Countries = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2.5rem;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`