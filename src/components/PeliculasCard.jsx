import { Link } from 'react-router-dom'

const PeliculasCard = ({ pelicula }) => {

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <Link to={`/pelicula/${pelicula.id}`}>
      <li className='flex flex-col mb-8 hover:bg-primary rounded-xl cursor-pointer'>
        <img className='h-[200px] flex-1 m-auto overflow-hidden' src={imgURL} alt={pelicula.title} />
        <div className='mx-4 mt-4 py-1.5 text-center text-lg'>{pelicula.title}</div>
      </li>
    </Link>
)
}

export default PeliculasCard