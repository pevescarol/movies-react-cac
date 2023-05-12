import { get } from '../utils/httpCliente';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <section className='flex justify-center my-6'>
        <form onSubmit={searchMovie} className='flex' >
          <input 
            type="text" 
            onChange={e => setSearchKey(e.target.value)} 
            className='text-black placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none  focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 focus-visible outline-none max-w-[500px] p-2 rounded-xl border-none shadow-md shadow-zinc-800/5'
            placeholder='¿Que pelicula esta buscando?'/>
          <button 
              className='py-2 px-3 bg-cyan-700 rounded-xl'
              type='submit'>
                Buscar
          </button>
        </form>
      </section>

      <section>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mx-auto">
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
