const api = `https://restcountries.com/v3.1`

export function getCountries() {
  return fetch(`${api}/all`)
    .then(r => r.json())
    .then(data => data)
    .catch(err => err)
}

export async function getCountriesbyName(name) {
  const isCode = name.length < 4
  const endpoint = isCode ? `alpha/${name}` : `name/${name}`
  try {
    const response = await fetch(`${api}/${endpoint}`)
    // Return an array which contain the country  
    const [data] = await response.json()
    return data
  } catch (err) {
    throw new Error(err.name)
  }
}
