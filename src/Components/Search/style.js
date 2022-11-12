import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  margin: 0 0 2.5em 0;

  @media screen and (min-width: 768px) {
    height: 50px;
    flex-direction: row;
  }
`

export const InputContainer = styled.div`
  padding: 0 1.25em;
  display: flex;
  background: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
  border-radius: 4px;
  align-items: center;
  gap: 12px;
  box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.05);
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const InputSearch = styled.input`
  font-family: 'Nunito Sans', sans-serif;
  border: none;
  height: 50px;
  font-size: 0.75em;
  width: 100%;
  background: transparent;
  outline: none;
  color: ${(props) =>
    props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};

  &::placeholder {
    color: ${(props) =>
      props.theme.isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  }
`

export const Icon = styled.i`
  color: ${(props) =>
    props.theme.isLight ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 100%)'};
  margin: 0 1.25em 0 0.5em;
  font-size: 0.875em;
`
