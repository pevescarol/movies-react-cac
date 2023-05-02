import { Link } from 'react-router-dom'

const PeliculasCard = ({ pelicula }) => {

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <Link to={`/pelicula/${pelicula.id}`}>
      <li className='flex flex-col mb-8  p-1.5 hover:bg-primary cursor-pointer'>
        <img className='h-[300px] flex-1 m-auto overflow-hidden' src={imgURL} alt={pelicula.title} />
        <div className='mx-4 mt-4 py-1.5 line-clamp-2 text-center'>{pelicula.title}</div>
      </li>
    </Link>
)
}

export default PeliculasCard