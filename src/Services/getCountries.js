import axios from 'axios'
const endpoint = `https://restcountries.com/v3.1/`

export default async function getCountries() {
  try {
    const { data } = await axios(`${endpoint}all`)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
