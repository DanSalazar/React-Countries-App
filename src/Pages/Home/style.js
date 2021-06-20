import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 1em 1em;
    height: auto;
    background: ${props => props.theme.isLight ? 'hsl(0, 0%, 98%)': 'hsl(207, 26%, 17%)'};
    
    @media screen and (min-width: 768px){
        padding: 1em 4.25em;
    }
`