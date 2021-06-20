import { API_KEY } from "./apiKey";

export default async function getCountries(){
   try {
        let data = await fetch(`${API_KEY}all`);
        const json = await data.json();
        return json;
   } catch (error) {
       console.log(error);
   }
}