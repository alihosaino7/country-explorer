import { useParams, useNavigate } from "react-router-dom"
import { Country } from "../../Interfaces"
import { BsArrowLeftShort } from 'react-icons/bs'
import { Row } from "../../components"

import data from '../../data.json'

export default function CountryDetails() {
  const navigate = useNavigate()
  const { name: countryName } = useParams()

  const {
    nativeName,
    population,
    subregion,
    capital,
    currencies,
    topLevelDomain,
    borders,
    languages,
    region,
    flags,
  } = data.find(country => country.name === countryName) as unknown as Country

  return (
    <div className="dark:text-v-light-gray text-[16px]">
      <button onClick={() => navigate('/')} className='dark:bg-dark-blue dark:text-v-light-gray rounded-md p-1 px-4 flex items-center shadow-btn gap-2 mb-10'>
        <span className="text-xl">
          <BsArrowLeftShort />
        </span>
        Back
      </button>
      <div className="md:flex items-center justify-between">
        <div className="basis-[45%] h-[300px] border-light-gray border-2 mb-[30px] md:mb-0">
          <img src={flags.png} alt="/" className="w-full h-full object-cover" />
        </div>
        <div className="basis-[47%]">
          <div className="md:flex items-center justify-between">
            <ul className="flex flex-col gap-2 mb-[2rem] md:mb-0">
              <h1 className="mb-8 font-extrabold text-2xl">{nativeName}</h1>
              <Row label="Native Name">{nativeName}</Row>
              <Row label="Population">{population}</Row>
              <Row label="Region">{region}</Row>
              <Row label="Subregion">{subregion}</Row>
              <Row label="Capital">{capital}</Row>
            </ul>
            <ul className="flex flex-col gap-2">
              <Row label="Top Level Domain">{topLevelDomain}</Row>
              <Row label="Currencies">{currencies.map(c => c.name).join(',')}</Row>
              <Row label="Languages">{languages.map(l => l.nativeName).join(',')}</Row>
            </ul>
          </div>
          {borders?.length > 0 && <div className="flex items-center flex-wrap gap-[1rem]">
            <h1 className="font-semibold text-lg mr-2">Border Countries:</h1>
            <div className="flex flex-wrap gap-[.5rem]">
              {borders?.map(border => 
                <span className="rounded-md px-4 text-lg mr-2 shadow-light dark:bg-dark-blue">
                  {border}
                </span>
              )}
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
