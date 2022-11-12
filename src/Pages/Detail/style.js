import styled from 'styled-components'
import { layoutSpacing, layoutSpacingMobile } from '../Home/style'

export const detailButtonStyles = `
  width: 90px;
  font-family: 'Nunito Sans', sans-serif;
  padding: 0.5em 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);
  font-size: 0.75em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${layoutSpacingMobile};
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: ${layoutSpacing};
  }

  @media screen and (min-width: 1280px) {
    height: 32.5em;
  }
`

export const ButtonDetail = styled.button`
  ${detailButtonStyles};
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};

  i {
    margin: 0 4px 0 0%;
    font-size: 0.5em;
  }
`
