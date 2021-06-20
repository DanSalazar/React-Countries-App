import styled from 'styled-components'

export const ThemeHandler = styled.button`
    background: transparent;
    color: ${props => props.theme.isLight ? 'hsl(200, 15%, 8%)': 'hsl(0, 0%, 100%)' };
    margin: 0;
    border: none;
    cursor: pointer;
    width: 7.5em;
    display: inline-flex;
    justify-content: space-around;
    transition: 0.2s linear;

    &:hover {
        color: ${props => props.theme.isLight ? 'hsl(200, 15%, 8%)': 'hsl(0, 0%, 100%)' };
    }
`