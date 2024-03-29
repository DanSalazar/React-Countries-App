import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { detailButtonStyles } from '../../Pages/Detail/style'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    height: 23.75em;
  }

  @media screen and (min-width: 1800px) {
    height: 28.125em;
  }
`

export const CountryDetails = styled.div`
  text-align: start;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-weight: 600;
    font-size: 1em;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 2.5em;
    grid-column: 3/5;
    align-self: center;

    h3 {
      display: inline-block;
      margin: 0 0.5em 0 0;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 0 6em;
  }
`

export const CountryDetailsInfo = styled.div`
  div {
    margin: 1.75em 0;
  }

  p {
    font-size: 0.875em;
    margin: 0.75em 0;
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;

    div {
      margin: 1em 0em;
    }
  }
`

export const Flag = styled.img`
  max-height: 15.625em;
  height: auto;
  margin: 2em 0;
  align-self: center;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    grid-column: 1/3;
    margin: 0;
    height: 21.875em;
  }

  @media screen and (min-width: 1280px) {
    min-height: 70%;
  }
`

export const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AncleDetail = styled(Link)`
  ${detailButtonStyles}
  text-decoration: none;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  margin: 0.5em 1em 0 0;
  width: 70px;
  display: inline-block;
  text-align: center;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
`

export const CountryNotFound = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
`
