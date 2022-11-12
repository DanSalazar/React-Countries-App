import styled from 'styled-components'

export const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 2.5rem;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`