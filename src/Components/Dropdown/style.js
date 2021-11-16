import styled from 'styled-components'

export const DropDownContainer = styled('div')`
  max-width: 220px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const DropDownHeader = styled('div')`
  cursor: pointer;
  margin: 0 0 0.5em 0;
  padding: 0 1.25em;
  height: 50px;
  box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  font-size: 0.75em;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
`

export const DropDownListContainer = styled('div')`
  position: relative;
`

export const DropDownList = styled('ul')`
  position: absolute;
  padding: 1em 1.75em;
  margin: 0;
  top: 0;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
  text-align: start;
  box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  font-size: 1em;
  width: 100%;
  font-weight: 600;
`

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  font-size: 0.75em;

  &:hover {
    font-weight: 800;
  }
`
