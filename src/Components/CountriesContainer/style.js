import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Countries = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 1em 0;
    justify-items: center;
    gap: 3em 0;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        gap: 3.5em;
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1280px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1600px){
        grid-template-columns: repeat(5, 1fr);
    }
`

export const Ancle = styled(Link)`
    text-decoration: none;
`