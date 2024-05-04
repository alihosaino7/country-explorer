import { memo } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchProps {
   query?: string,
   onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Search: React.FC<SearchProps> = memo(({ onChange }) => {
  return (
    <div className='flex items-center rounded-md bg-white dark:bg-dark-blue h-[50px] p-2 px-6 mb-6 md:w-2/5 shadow-lighter'>
      <span className='mr-4 text-xl text-dark-gray dark:text-v-light-gray'>
         <AiOutlineSearch />
      </span>
      <input 
         onChange={onChange} 
         placeholder='Search for a country...'
         className='outline-none border-none bg-transparent text-dark-gray dark:text-v-light-gray placeholder:dark:text-v-light-gray grow h-full'
      />
    </div>
  )
})

export default Search