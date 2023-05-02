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
    <div className='w-full grid md:grid-cols-2 px-20 py-8'>
      <img className='w-[300px] m-auto' src={imgURL} alt={pelicula.title} />

      <div className='pt-8'>
        <p className='py-4'>
          <strong>Titulo: </strong>
          {pelicula.title}
        </p>
        <p className='py-4'>
          <strong>Descripcion: </strong>
          {pelicula.overview}
        </p>
        <p>
          <strong>Generos: </strong>
          {pelicula.genres.map((genre) => genre.name).join(', ')}
        </p>
      </div>
    </div>
  )

}

export default DetallePelicula