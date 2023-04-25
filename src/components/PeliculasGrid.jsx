import { get } from '../utils/httpCliente'
import PeliculasCard from './PeliculasCard'
import '../styles/PeliculasGrid.css'
import { useState, useEffect } from 'react'

const PeliculasGrid = () => {

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    get('/discover/movie').then((data) => {
      setPeliculas(data.results)
    })
  }, [])

  return(
    <ul className='moviesGrid'>
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
      ))}
    </ul>
  )
}

export default PeliculasGrid