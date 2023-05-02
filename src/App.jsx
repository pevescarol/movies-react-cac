import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import DetallePelicula from './pages/DetallePelicula';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>
          <h1 className='text-center uppercase text-3xl'>Peliculas</h1>
        </Link>
      </header>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pelicula/:peliculaId' element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
