import { get } from '../utils/httpCliente'
import PeliculasCard from './PeliculasCard'
import '../styles/PeliculasGrid.css'

const PeliculasGrid = () => {
  return(
    <ul className='moviesGrid'>
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
      ))}
    </ul>
  )
}

export default PeliculasGrid