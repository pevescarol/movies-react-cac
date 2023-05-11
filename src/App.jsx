import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import DetallePelicula from './pages/DetallePelicula'

function App() {
  return (
    <BrowserRouter>
      <header className='bg-header h-[100px] items-center gap-3 justify-around flex text-white sticky top-0'>
        <Link to='/'>
          <h1 className='text-center uppercase text-3xl font-semibold'>Peliculas</h1>
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
