import { Link } from 'react-router-dom'

const PeliculasCard = ({ pelicula }) => {

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <Link to={`/pelicula/${pelicula.id}`} className='m-0 cursor-pointer overflow-hidden relative isolate group'>
      <li className='p-0'>
        <img className='rounded-1 ' src={imgURL} alt={pelicula.title} />
        <div className='w-[80%] absolute mx-auto p-2 bottom-0 md:bottom-[-10rem] left-[50%] translate-x-[-50%] text-center text-white backdrop-blur-sm bg-gray-900/[0.2] rounded-lg z-10 ease-in duration-300 group-hover:bottom-3 '>
          <p className='text-center text-lg'>{pelicula.title}</p>
        </div>
      </li>
    </Link>
)
}

export default PeliculasCard