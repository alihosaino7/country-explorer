import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Loader, Navbar } from './components'
import { useDarkMode } from './hooks/useDarkMode'
import { IContext } from './Interfaces'

const Home = lazy(() => import('./routes/Home'))
const CountryDetails = lazy(() => import('./routes/Details'))
const ErrorPage = lazy(() => import('./routes/ErrorPage'))

export default function App() {

  const { dark } = useDarkMode() as IContext

  return (
    <div className={`min-h-screen${dark ? ' dark bg-v-dark-blue-dark' : ''}`}>
      <Navbar />
      <main className='py-12'>
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/country-details/:name' element={<CountryDetails />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Container>
      </main>
    </div>
  )
}
