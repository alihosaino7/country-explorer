import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Country } from '../Interfaces'

interface Props { 
  country: Country
}

const Card: React.FC<Props> = ({ country }) => {
  const { name, population, region, capital, flags: { png: image } } = country

  const navigate = useNavigate()

  return (
    <div className='rounded-md dark:bg-dark-blue dark:text-v-light-gray overflow-hidden w-full shadow-light cursor-pointer' onClick={() => navigate(`/country-details/${name}`)}>
      <div className="w-full h-[150px]">
        <img src={image} className='object-cover w-full h-full' alt={`${name} flag`} />
      </div>
      <div className="p-6">
        <h1 className='font-semibold text-lg mb-4'>{name}</h1>
        <p className='font-semibold mb-2'>Population: <span className='dark:opacity-90 ml-1 font-light'>{population.toLocaleString()}</span></p>
        <p className='font-semibold mb-2'>Region: <span className='dark:opacity-90 ml-1 font-light'>{region}</span></p>
        <p className='font-semibold mb-2'>Capital: <span className='dark:opacity-90 ml-1 font-light'>{capital}</span></p>
      </div>
    </div>
  )
}

export default Card