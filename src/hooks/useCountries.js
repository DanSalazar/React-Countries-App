import { useState, useEffect, useMemo } from 'react'
import { getCountries } from '../services'
import { filterCountriesbByNameAndRegion }from '../utilities'

export default function useCountries() {
	const [countries, setCountries] = useState([])
  const [name, setName] = useState('')
	const [region, setRegion] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getCountries()
			.then(setCountries)
			.catch(err => {
				setCountries([])
			})
			.finally(() => setLoading(false))
	}, [])

	const handleName = (e) => {
    const sanitizateInput = e.target.value.toLowerCase().trim()
    setName(sanitizateInput)
  }

  const handleRegion = (value) => setRegion(value)

	const data = useMemo(() => 
    filterCountriesbByNameAndRegion(countries, name, region), 
    [countries, name, region])

	return { data, handleName, handleRegion, loading }
}