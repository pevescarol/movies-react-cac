import { useState, useEffect } from 'react'
import { get } from '../utils/httpCliente'
import { useParams } from 'react-router-dom'

const DetallePelicula = () => {

  const [pelicula, setPelicula] = useState(null)

  const {peliculaId} = useParams()

  useEffect(() => {
    get(`/movie/${peliculaId}`).then((data) => {
      setPelicula(data)
    })
  }, [peliculaId])

  if(!pelicula){
    return null
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return(
    <div >
      <div className='h-[300px] left-0 right-0 top-0 relative'> 
        <div className='overlay-film-cover'></div> 
        <img className='object-cover object-top  w-full h-full' src={`https://image.tmdb.org/t/p/w1280${pelicula.backdrop_path}`} alt={pelicula.title} />
      </div>

      <div className='-mt-[150px] mx-32 flex items-center relative z-10 mobile:block'>
        <img className='w-[200px] min-w-[200px] h-[300px] mobile:mx-auto' src={imgURL} alt={pelicula.title} />
        <div className='px-3 flex flex-col items-start gap-3 mobile:items-center'>
          <p className=' text-xl line-clamp-1'>{pelicula.title}</p>
          <ul className='flex items-center gap-3 mobile:flex-wrap'>
              {pelicula.genres.map((genre) =>(
                <li className='px-3 py-1.5 bg-primary rounded-lg text-sm'>{genre.name}</li>
              ) )}
          </ul>
          <p className='opacity-[0.9] mobile:text-center'>{pelicula.overview}</p>
        </div>
      </div>
    </div>
  )

}

export default DetallePelicula