import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import DetallePelicula from './pages/DetallePelicula'

function App() {
  return (
    <BrowserRouter>
      <header className='bg-white h-20 pt-3 flex items-center justify-center fixed top-0 w-full z-10'>
        <Link to='/' className='group relative tracking-wide antialiased flex justify-center'>
          <span className=' inline-block text-3xl font-semibold'>🍿</span>
          {/* <span className=' inline-block text-3xl font-semibold  opacity-0 transition-all duration-300 transform translaye-x-5 group-hover:opacity-100 group-hover:translate-x-0 '>🍿</span> */}
            <h1 className='inline-block uppercase mx-1 text-3xl font-semibold bg-gradient-to-r from-indigo-400 via-sky-200 to-indigo-400 bg-clip-text tracking-tight text-transparent'>De Pelis</h1>
          <span className=' inline-block text-3xl font-semibold'>🍿</span>
        </Link>
      </header>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pelicula/:peliculaId' element={<DetallePelicula />} />
        <Route path='/:page?' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
