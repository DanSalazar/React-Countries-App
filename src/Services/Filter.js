export default function countriesFilter(arr, name, region){
    
    const countryFilter = arr.filter(item => {
        
        if(item.name.toLowerCase().startsWith(name.toLowerCase().trim())) {
            return item;
        } 
        
        return item.name.toLowerCase() === name.toLowerCase().trim(); 
    })

    let resultFilter = [];

    if(region.length > 1){

        if(region === "All") resultFilter = countryFilter;

        else resultFilter = countryFilter.filter(item => {
            return item.region.toLowerCase() === region.toLowerCase().trim();
        });
    }

    return resultFilter.length < 1 ?  countryFilter: resultFilter;
}