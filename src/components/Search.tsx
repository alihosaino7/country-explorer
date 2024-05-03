import { memo } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchProps {
   query?: string,
   onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Search: React.FC<SearchProps> = memo(({ onChange }) => {
  console.log('Search Rendered')
  return (
    <div className='flex items-center rounded-md bg-white dark:bg-dark-blue h-[50px] p-2 px-6 mb-6 md:w-2/5' style={{ boxShadow: '2px 2px 4px 0 rgba(0,0,0,0.1)' }}>
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