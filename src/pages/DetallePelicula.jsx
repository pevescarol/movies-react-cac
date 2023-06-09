import { useState, useEffect } from 'react'
import { get } from '../utils/httpCliente'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const DetallePelicula = () => {

  const [pelicula, setPelicula] = useState(null)
  const [cargando, setCargando] = useState(true)
  

  const {peliculaId} = useParams()
  
  useEffect(() => {
    setCargando(true)
    get(`/movie/${peliculaId}?language=es`).then((data) => {
      setPelicula(data)
      setCargando(false)
    })
  }, [peliculaId])
  
  if(cargando){
    console.log('cargando spinner...')
    return <Spinner />
  }

  if(!pelicula){
    return null
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return(
    < >
      <div className='h-[300px] left-0 right-0 top-0 relative'> 
        <div className='overlay-film-cover'></div> 
        <img className='object-cover object-top mt-[80px] rounded-none  w-full h-full' src={`https://image.tmdb.org/t/p/w1280${pelicula.backdrop_path}`} alt={pelicula.title} />
      </div>

      <div className='-mt-[150px] md:mx-32 flex items-center justify-center relative z-10 mobile:block mobile:pb-10'>
        <img className='w-[200px] min-w-[200px] h-[300px] mobile:mx-auto' src={imgURL} alt={pelicula.title} />
        <div className='md:ml-6 px-3 pt-8 flex flex-col items-start gap-3 mobile:items-center'>
          <p className=' text-xl text-white mobile:text-black font-bold'>{pelicula.title}</p>
          <ul className='flex items-center justify-center gap-3 mobile:flex-wrap'>
              {pelicula.genres.map((genre) =>(
                <li key={genre.name} className='px-3 py-1.5 bg-indigo-500 rounded-lg text-md font-semibold text-white'>{genre.name}</li>
              ) )}
          </ul>
          <p className='opacity-[0.9] mobile:text-center mobile:px-6 mt-10 mobile:m-0'>{pelicula.overview}</p>
        </div>
      </div>
    </>
  )

}

export default DetallePelicula