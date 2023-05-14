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
    <div className='w-full h-[100px] bg-indigo-500 flex items-center justify-center py-6 absolute left-0' >
      { currentPage > 1 && (
        <Link 
          to={`${location.pathname}?page=${prevPage}`} 
          className='px-3 py-2 inline-flex items-center text-white hover:bg-indigo-800 bg-indigo-800 rounded-lg'
          onClick={() => onPageChange(prevPage)}
        >
          Anterior
        </Link>
      )}

      <span className='px-0.5 w-16 h-8 inline-flex justify-center items-center border-0 border-l-2 border-r-2 border-white border-opacity-20 bg-transparent text-center text-xl text-white font-bold focus:border-white focus:border-opacity-20 focus:ring-0'>{currentPage}</span>

      { currentPage < totalPages && (
        <Link 
          to={`${location.pathname}?page=${nextPage}`} 
          className='px-3 py-2 inline-flex items-center text-white hover:bg-indigo-800 bg-indigo-800 rounded-lg'
          onClick={() => onPageChange(nextPage)}
        >
          Siguiente
        </Link>
      )}
    </div>
  )
}

export default Paginacion