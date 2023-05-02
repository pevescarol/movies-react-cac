import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import DetallePelicula from './pages/DetallePelicula';
import { IoIosSearch } from 'react-icons/io'

function App() {
  return (
    <BrowserRouter>
      <header className='bg-header h-[100px] items-center gap-3 justify-around flex text-white sticky top-0'>
        <Link to='/'>
          <h1 className='text-center uppercase text-3xl font-semibold'>Peliculas</h1>
        </Link>

        {/* Search */}
        <div className='border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary relative'>
          <input type='text' className='bg-transparent outline-0 flex-1' placeholder='Buscar...' />
          <IoIosSearch size={18}></IoIosSearch>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pelicula/:peliculaId' element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
