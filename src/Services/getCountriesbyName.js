import { API_KEY } from './apiKey'

export default async function getCountriesbyName(name){
    const key =  await name.length === 3 ? `${API_KEY}alpha/${name}`: `${API_KEY}name/${name}`;
    const data = await fetch(key);
    const json = await data.json();
    console.log(json)
    return json;
}