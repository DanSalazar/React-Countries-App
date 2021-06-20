import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    height: auto;
    min-width: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding: 1.75em;
    animation-name: Show;
    animation-duration: 1.5s;
    
    @media screen and (min-width: 768px){
        padding: 1em 4.25em;
        height: 47.5em;
    }

    @media screen and (min-width: 1024px){
        height: 31.25em;
    }

    @media screen and (min-width: 1800px){
        height: 35em;
    }

    @keyframes Show{
        0% {
            transform: scale(0.1);
            opacity: 0.6;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

`