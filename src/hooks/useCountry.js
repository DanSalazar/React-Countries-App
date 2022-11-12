import { useState, useEffect } from 'react'
import { getCountriesbyName } from '../services'

export default function useCountry(param) {
	const [country, setCountry] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
    getCountriesbyName(param)
    	.then(response => {
    		setCountry(response)
    	})
    	.catch(err => {
    		setCountry(null)
    	})
    	.finally(() => setLoading(false))
  }, [param])

  return { country, loading }
}