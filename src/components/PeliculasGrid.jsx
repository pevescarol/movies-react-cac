import { get } from '../utils/httpCliente';
import { useState, useEffect } from 'react';

import PeliculasCard from './PeliculasCard';
import Paginacion from '../components/Paginacion';


const PeliculasGrid = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    get(`/discover/movie?language=es&page=${page}`)
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => {
        console.log('Error al obtener los datos: ', error);
      });
  };

  const fetchSearchMovies = (searchKey) => {
    get(`/search/movie?query=${searchKey}`)
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => {
        console.log('Error al obtener los datos: ', error);
      });
  };

  const searchMovie = (e) => {
    e.preventDefault()
    fetchSearchMovies(searchKey)
  }

  return (
    <>
      <section className='w-full relative mt-28'>
        <div className='mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-2x1 text-center'>
          <form onSubmit={searchMovie} className='flex flex-col sm:flex-row justify-center gap-4 items-center font-medium' >
            <input 
              type="text" 
              onChange={e => setSearchKey(e.target.value)} 
              className='sm:mb-0 px-5 py-3 bg-indigo-100 text-indigo-700 transform hover:bg-white active:top-0.5 placeholder:text-indigo-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 focus-visible outline-none max-w-[500px] md:w-[500px] p-2 rounded-xl border-none shadow-md shadow-zinc-800/5'
              placeholder='¿Qué peli estas buscando?'/>
            <button 
                className='px-5 py-3 bg-indigo-500 shadow rounded-xl text-indigo-100 hover:bg-indigo-600 hover:text-white active:top-0.5'
                type='submit'>
                  Buscar
            </button>
          </form>
        </div>
      </section>

      <section className=' mx-auto py-8 px-4 w-full max-w-7x1 '>
        <ul className="grid grid-cols-[300px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center">
            {peliculas.map((pelicula) => (
              <PeliculasCard key={pelicula.id} pelicula={pelicula} />
            ))}
        </ul>
      </section>

      <Paginacion
        currentPage={currentPage}
        totalPages={50}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default PeliculasGrid;
