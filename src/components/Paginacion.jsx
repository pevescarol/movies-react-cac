import { Link, useLocation } from 'react-router-dom'

function Paginacion ( { currentPage, totalPages, onPageChange }) {

  const location = useLocation()
  
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    console.log('devuelve null')
    return null
  }

  return (
    <div className='w-full h-[100px] bg-header text-center pt-6' >
      { currentPage > 1 && (
        <Link 
          to={`${location.pathname}?page=${prevPage}`} 
          className='px-3 py-1.5 bg-primary rounded-lg'
          onClick={() => onPageChange(prevPage)}
        >
          Anterior
        </Link>
      )}

      <span className='active'>{currentPage}</span>

      { currentPage < totalPages && (
        <Link 
          to={`${location.pathname}?page=${nextPage}`} 
          className='px-3 py-1.5 bg-primary rounded-lg'
          onClick={() => onPageChange(nextPage)}
        >
          Siguiente
        </Link>
      )}
    </div>
  )
}

export default Paginacion