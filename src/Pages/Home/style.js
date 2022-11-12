import styled from 'styled-components'
export const layoutSpacingMobile = '1rem'
export const layoutSpacing = '2rem 4.25rem'
export const layoutWidthSpacing = '4.25rem'

export const AppContainer = styled.div`
  padding: ${layoutSpacingMobile};

  @media screen and (min-width: 768px) {
    padding: ${layoutSpacing};
  }
`