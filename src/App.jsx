import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import DetallePelicula from './pages/DetallePelicula'

function App() {
  return (
    <BrowserRouter>
      <header className='bg-header h-16 pt-3 items-center sticky top-0 dark:backdrop-blur shadow-md shadow-slate-900/5'>
        <Link to='/'>
        <h1 className='text-center uppercase text-3xl font-semibold'> 🍿<span className=' bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-200 bg-clip-text tracking-tight text-transparent'>Cartelera de Peliculas</span> 🍿</h1>
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
