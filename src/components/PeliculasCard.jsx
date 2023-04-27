import '../styles/PeliculasCard.css'
import { Link } from 'react-router-dom'

const PeliculasCard = ({ pelicula }) => {

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <Link to={`/pelicula/${pelicula.id}`}>
      <li className='movieCard'>
        <img className="movieImage" src={imgURL} alt={pelicula.title} />
        <div>{pelicula.title}</div>
      </li>
    </Link>
)
}

export default PeliculasCard