import styled from 'styled-components'

export const CountryCard = styled.div`
  width: 250px;
  border-radius: 6px;
  min-height: 100%;
  overflow: hidden;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
`

export const CountryFlag = styled.img`
  width: 250px;
  height: 160px;
  object-fit: cover;
`

export const CountryBody = styled.div`
  padding: 1em 1.25em 2em 1.25em;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  text-align: start;

  h4 {
    margin: 0 0 1em 0;
    font-size: 18px;
  }

  p {
    font-size: 0.875em;
    font-weight: 600;
    margin: 2px 0px;
  }

  span {
    font-weight: 300;
  }
`
