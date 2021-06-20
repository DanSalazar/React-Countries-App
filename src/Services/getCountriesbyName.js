import { API_KEY } from './apiKey'

export default async function getCountriesbyName(name){
    const data = await fetch(`${API_KEY}name/${name}`);
    const json = data.json();
    return json;
}