import React, { useContext} from 'react';
import { ThemeContext } from 'styled-components';
import {ThemeHandler} from './style';

function ButtonTheme() {
    const { isLight, setLight } = useContext(ThemeContext);

    const handleTheme = () => {
        setLight(!isLight);
    }

    return (
        <ThemeHandler onClick={handleTheme}> 
            <i className={isLight ? "fas fa-moon": "fas fa-sun"}/>  
            {isLight ? "Dark Mode": "Light Mode"} 
        </ThemeHandler>
    )
}

export default ButtonTheme
