import { useState, useEffect } from 'react'
import { Card, Search, Select } from '../../components'
import { Country } from '../../Interfaces'

import data from '../../data.json'

export default function Home() {

   const countriesList = [...data]

   const [query, setQuery] = useState('')
   const [countries, setCountries] = useState<Country[]>(countriesList as Country[])
   const [region, setRegion] = useState('')

   useEffect(() => {
     if (query !== '') {
       setCountries(
         data.filter(country => country.name.toLocaleLowerCase().startsWith(query.toLowerCase())) as Country[]
       )
     } else {
        setCountries([...data] as Country[])
     }
   }, [query])

   useEffect(() => {
      if (region) {
         setCountries(data.filter(country => country.region === region) as Country[])
      } else {
         setCountries([...data] as Country[])
      }
   }, [region])


   return (
      <div className='text-[14px] h-full'>
      <div className="md:flex justify-between align-center mb-12">
         <Search onChange={(e) => setQuery(e.target.value)} />
         <Select value={region} onChange={setRegion} />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
         {countries.map((country) => (
            <Card key={country.name} country={country} />
         ))}
      </div>
      </div>
   )
} 
