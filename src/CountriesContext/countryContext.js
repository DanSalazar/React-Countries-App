import React, {useState, useEffect} from 'react'
import getCountries from '../Services/getCountries'

export const countryContext = React.createContext({});

export const CountryProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(res => setCountries(res))
    }, []);


    return <countryContext.Provider value={{countries}} >
        {children}
    </countryContext.Provider>
}