import { get } from '../utils/httpCliente';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import PeliculasCard from './PeliculasCard';
import Paginacion from '../components/Paginacion';
import Spinner from '../components/Spinner'


const PeliculasGrid = () => {

  // como trabaja useLocation
  // const location = useLocation()
  // console.log(location);
  // console.log(location.search);

  // utilizo este hook para tomar lo que viene por params
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  // guardo en una variable lo que se busc en el input
  const query = useQuery()
  const search = query.get('search')

  const [peliculas, setPeliculas] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cargando, setCargando] = useState(true)

  
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, search]); /* seagrega search para que el efecto se ejecute con los cambios */

  const fetchData = (page) => {

    // si hay una busqueda visita un endpoint, sino otro
    const searchURL = search ? '/search/movie?query=' + search  : `/discover/movie?language=es&page=${page}`
    
    setCargando(true)
    
    get(searchURL)
      .then((data) => {
        setPeliculas(data.results);
        setCargando(false)
      })
      .catch((error) => {
        console.log('Error al obtener los datos: ', error);
      });
  };

  if(cargando) {
    return <Spinner />
  }

  return (
    <>
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
