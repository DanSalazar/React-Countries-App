export default function countriesFilter(arr, name, region) {
  const countryFilter = arr.filter(item => {
    if (item.name.official.toLowerCase().includes(name.toLowerCase().trim())) {
      return item;
    }

    return item.name.official.toLowerCase() === name.toLowerCase().trim();
  })

  let resultFilter = countryFilter;

  if (region.length > 1) {
    if (region === "All") resultFilter = countryFilter;
    else resultFilter = countryFilter.filter(item => {
      return item.region.toLowerCase() === region.toLowerCase().trim();
    });
  }
  
  return resultFilter;
}