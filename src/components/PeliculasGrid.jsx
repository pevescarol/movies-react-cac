import { get } from '../utils/httpCliente'
import { useState, useEffect } from 'react'

import PeliculasCard from './PeliculasCard'
import Paginacion from "../components/Paginacion"


const PeliculasGrid = () => {

  const [peliculas, setPeliculas] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  const fetchData = (page) => {
    get(`/discover/movie?language=es&page=${page}`)
      .then((data) => {
        setPeliculas(data.results)
      })
      .catch((error) => {
        console.log('Error al obtener los datos: ', error)
      })
  }

  return(
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mx-auto'>
        {peliculas.map((pelicula) => (
          <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
      </ul>

      <Paginacion currentPage={currentPage} totalPages={50} onPageChange={(page) => setCurrentPage(page)}/>
    </div>
  )
}

export default PeliculasGrid
