import { get } from '../utils/httpCliente'
import PeliculasCard from './PeliculasCard'
import { useState, useEffect } from 'react'

const PeliculasGrid = () => {

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    get('/discover/movie').then((data) => {
      setPeliculas(data.results)
    })
  }, [])

  return(
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8'>
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
      ))}
    </ul>
  )
}

export default PeliculasGrid