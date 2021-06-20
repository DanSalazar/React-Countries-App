import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import getCountriesbyName from '../../Services/getCountriesbyName';
import Spinner from '../../Components/Spinner/Spinner';
import {
    ButtonDetail,
    CountryDetails,
    CountryDetailsInfo,
    DetailContainer,
    SpinnerContainer,
    Borders,
    Flag
} from './style';

function DetailCountry() {

    const [country, setCountry] = useState([])

    const route = useRouteMatch();

    const history = useHistory();

    useEffect(() => {
        getCountriesbyName(route.params.name).then(res => setCountry([res[0]]));
    }, [route.params.name]);

    const handleHistory = () => {
        history.goBack();
    }

    if (country.length < 1) return (
        <SpinnerContainer>
            <Spinner></Spinner>
        </SpinnerContainer>
    )

    return (
        <>
            <ButtonDetail onClick={handleHistory}>
                <i className="fas fa-arrow-left" />
                Back
            </ButtonDetail>
            {
                country.map(item => (
                    <DetailContainer key={item.numericCode}>
                        <Flag src={item.flag} />
                        <CountryDetails>
                            <h2> {item.name} </h2>
                            <CountryDetailsInfo>
                                <div>
                                    <p> <b>Native Name</b>: <span> {item.nativeName} </span> </p>
                                    <p> <b>Population</b>: <span> {item.population} </span> </p>
                                    <p> <b>Region</b>: <span> {item.region} </span> </p>
                                    <p> <b>Sub Region</b>: <span> {item.subregion} </span> </p>
                                    <p> <b>Capital</b>: <span> {item.capital} </span> </p>
                                </div>
                                <div>
                                    <p> <b>Top Level Domain</b>: <span> {item.topLevelDomain[0]} </span> </p>
                                    <p> <b>Currencies</b>: <span> {item.currencies[0].code} </span> </p>
                                    <p> <b>Languages</b>: <span> {item.languages.map(item => item.name + '. ')} </span> </p>
                                </div>
                            </CountryDetailsInfo>
                            <h3> Border countries: </h3>
                            {
                                item.borders.map((item, index) => <Borders key={index}> <p> {item} </p> </Borders>)
                            }
                        </CountryDetails>
                    </DetailContainer>
                ))
            }
        </>
    )
}

export default DetailCountry;
