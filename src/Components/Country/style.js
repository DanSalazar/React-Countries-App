import styled from 'styled-components'

export const CountryCard = styled.div`
  border-radius: 4px;
  max-width: 280px;
  border-radius: 6px;
  overflow: hidden;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};

  @media screen and (min-width: 768px) {
    width: auto;
  }
`

export const CountryFlag = styled.img`
  width: 100%;
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
