import React from 'react';
import { CountryFlag, CountryCard, CountryBody } from './style';

function Country({svg, name, region, capital, population}) {

    return (
        <CountryCard>
            <CountryFlag loading="lazy" alt="Flag" src={svg}/>
            <CountryBody>
                <h4> {name} </h4>
                <p> Population: <span> {parseFloat(population)} </span> </p>
                <p> Region: <span> {region} </span> </p>
                <p> Capital: <span> {capital} </span> </p>
            </CountryBody>
        </CountryCard>
    )
}

export default Country
