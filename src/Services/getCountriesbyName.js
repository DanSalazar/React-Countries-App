import axios from 'axios'
const endpoint = `https://restcountries.com/v3.1/`

export default async function getCountriesbyName(name) {
  const key =
    (await name.length) === 3
      ? `${endpoint}alpha/${name}`
      : `${endpoint}name/${name}`
  const { data } = await axios(key)
  return name.length === 3 ? [data] : data
}
