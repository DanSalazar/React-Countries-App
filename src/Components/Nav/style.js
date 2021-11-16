import styled from 'styled-components'

export const NavStyled = styled.nav`
  min-width: 100%;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  display: flex;
  height: 4em;
  font-weight: 800;
  padding: 0 1em;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);

  p {
    font-size: 0.875em;
  }

  @media screen and (min-width: 768px) {
    padding: 0 4.25em;
  }
`
