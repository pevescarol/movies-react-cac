
const PeliculasCard = ({ pelicula }) => {
  return (
    <li className='movieCard'>
      <div>{pelicula.title}</div>
    </li>
)
}

export default PeliculasCard