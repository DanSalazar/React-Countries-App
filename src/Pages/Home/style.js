import styled from 'styled-components'
export const layoutSpacingMobile = '1rem'
export const layoutSpacing = '2rem 4.25rem'

export const AppContainer = styled.div`
  padding: ${layoutSpacing};

  @media screen and (min-width: 768px) {
    padding: ${layoutSpacing};
  }
`