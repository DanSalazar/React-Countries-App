import React, { useState, useEffect } from 'react';
import {  useHistory, useRouteMatch } from 'react-router-dom';
import getCountriesbyName from '../../Services/getCountriesbyName';
import Spinner from '../../Components/Spinner/Spinner';
import {
    ButtonDetail,
    CountryDetails,
    CountryDetailsInfo,
    DetailContainer,
    SpinnerContainer,
    Flag,
    AncleDetail,
    NotFound
} from './style';

function DetailCountry() {

    const [country, setCountry] = useState([])

    const route = useRouteMatch();

    const history = useHistory();

    useEffect(() => {
        getCountriesbyName(route.params.name).then(res => res.length > 1 ? setCountry([res[0]]):
        setCountry(res));
    }, [route.params.name]);

    const handleHistory = () => {
        history.goBack();
    }
    
    console.log(country)

    if (country.length < 1) return (
        <SpinnerContainer>
            <Spinner/>
        </SpinnerContainer>
    )

    return (
        <>
            <ButtonDetail onClick={handleHistory}>
                <i className="fas fa-arrow-left" /> Back
            </ButtonDetail>
            {
                country[0] === undefined ? <NotFound> Country not Found </NotFound> :
                    country.map(item => (
                        <DetailContainer key={item.numericCode}>
                            <Flag src={item.flag} />
                            <CountryDetails>
                                <h2> {item.name} </h2>
                                <CountryDetailsInfo>
                                    <div>
                                        <p> Native Name: <span> {item.nativeName} </span> </p>
                                        <p> Population: <span> {item.population} </span> </p>
                                        <p> Region: <span> {item.region} </span> </p>
                                        <p> Sub Region: <span> {item.subregion} </span> </p>
                                        <p> Capital: <span> {item.capital} </span> </p>
                                    </div>
                                    <div>
                                        <p> Top Level Domain: <span> {item.topLevelDomain[0]} </span> </p>
                                        <p> Currencies: <span> {item.currencies[0].code} </span> </p>
                                        <p> Languages: <span> {item.languages.map(item => item.name + '. ')} </span> </p>
                                    </div>
                                </CountryDetailsInfo>
                                <h3> Border countries: </h3>
                                {
                                    item.borders.map((item, index) => <AncleDetail key={index} to={`/${item}`}> {item} </AncleDetail>)
                                }
                            </CountryDetails>
                        </DetailContainer>
                    ))
            }
        </>
    )
}

export default DetailCountry;
