import { useDarkMode } from '../hooks/useDarkMode'
import Container from './Container'
import { BsMoon, BsMoonFill } from 'react-icons/bs'

const Navbar = () => {
  const { dark, setDark } = useDarkMode()

  const toggleDarkMode = () => setDark(prev => !prev)

  console.log('Navbar Renderd')

  return (
    <nav className='bg-white dark:bg-dark-blue shadow-nav'>
      <Container>
         <div className='flex items-center justify-between p-4 dark:text-white'>
            <h1 className='font-bold text-xl'>Where in the world?</h1>
            <button className='flex gap-2 items-center' onClick={toggleDarkMode}>
              {dark ? <><BsMoonFill />Light Mode</> : <><BsMoon />Dark Mode</>}
            </button>
         </div>
      </Container>
    </nav>
  )
}

export default Navbar