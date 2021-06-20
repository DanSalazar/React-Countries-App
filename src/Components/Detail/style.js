import styled from 'styled-components'

export const ButtonDetail = styled.button`
    width: 90px;
    font-family: 'Nunito Sans', sans-serif;
    padding: 0.5em 0;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);
    background: ${props => props.theme.isLight ? 'hsl(0, 0%, 100%)': 'hsl(209, 23%, 22%)'};
    font-size: 0.75em;
    color: ${props => props.theme.isLight ? 'hsl(200, 15%, 8%)': 'hsl(0, 0%, 100%)'};

    i {
        margin: 0 4px 0 0%;
        font-size: 0.5em;
    }
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px){
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        height: 23.75em;
    }

    @media screen and (min-width: 1800px){
        height: 28.125em;
    }

`


export const CountryDetails = styled.div`
    text-align: start;
    color: ${props => props.theme.isLight ? 'hsl(200, 15%, 8%)': 'hsl(0, 0%, 100%)'};

    h2 {
        font-size: 1.5em;
    }

    h3  {
        font-weight: 300;
        font-size: 1em;
    }

    @media screen and (min-width: 1024px){
        margin:  0 0 0 4em;
        grid-column: 3/5;
        align-self: center;

        h3 {
            display: inline-block;
            margin: 0 0.5em 0 0;
        }
    }

    @media screen and (min-width: 1280px){
        margin:  0 0 0 6em;
    }

    

`

export const CountryDetailsInfo  = styled.div`

    div {
        margin: 1.75em 0;
    }

    p {
        font-size: 0.875em;
        margin: 0.75em 0;
    }

    b {
        font-weight: 600;
    }

    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: space-between;

        div {
            margin: 1em 0em;
        }

    }

`

export const Flag = styled.img`
    max-width: 100%;
    max-height: 15.625em;
    height: auto;
    margin: 2em 0;
    align-self: center;

    @media screen and (min-width: 1024px){
        grid-column: 1/3;
        margin: 0;
        height: 21.875em;
        
    }

    @media screen and (min-width: 1280px){
        min-height: 90%;
        width: 100%;
    }

`
export const Borders = styled.div`
    background: ${props => props.theme.isLight ? 'hsl(0, 0%, 100%)': 'hsl(209, 23%, 22%)'};
    box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1);
    margin: 0.5em 0.75em 0 0;
    width: 4.375em;
    height: 1.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 0.75em;
    }

`

export const SpinnerContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`