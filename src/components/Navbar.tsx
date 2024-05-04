import { useDarkMode } from '../hooks/useDarkMode'
import Container from './Container'
import { BsMoon, BsMoonFill } from 'react-icons/bs'

const Navbar = () => {
  const { dark, setDark } = useDarkMode()

  const toggleDarkMode = () => setDark(prev => !prev)

  const displayModeButton = dark ? 
    <><BsMoonFill /><p className='hidden sm:block'>Light Mode</p></> : 
    <><BsMoon /><p className='hidden sm:block'>Dark Mode</p></>


  return (
    <nav className='bg-white dark:bg-dark-blue shadow-nav'>
      <Container>
         <div className='flex items-center justify-between py-4 dark:text-white'>
            <h1 className='font-bold text-xl'>Where in the world?</h1>
            <button className='flex sm:gap-2 justify-center items-center hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] h-full p-2 px-3' onClick={toggleDarkMode}>
              {displayModeButton}
            </button>
         </div>
      </Container>
    </nav>
  )
}

export default Navbar