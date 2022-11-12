/**
  * @param {Object[]} countries
  * @param {string} name
  * @param {string} region
  */
export function filterCountriesbByNameAndRegion(countries, name, region) {
  return countries.filter(country => {
    if (!name && !region) return country 

    if (name && region) {
      return country.name.common.toLowerCase().startsWith(name) 
        && (region === 'All' || country.region.toLowerCase() === region.toLowerCase())
    }

    if (name && !region) return country.name.common.toLowerCase().startsWith(name)

    if (region === 'All' && !name) return country

    if (region && !name) return country.region.toLowerCase() === region.toLowerCase()

    return country
  })
}
