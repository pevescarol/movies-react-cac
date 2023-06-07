import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Buscador = () => {

  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/?search=${searchText}`)
  }

  return (
    <section className='w-full relative mt-28'>
        <div className='mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-2x1 text-center'>
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center gap-2 items-center font-medium' >
            <input 
              type="text" 
              value={searchText} /* se pasa el valor */
              onChange={(e) => setSearchText(e.target.value)} /* se actualiza el valor cuando este cambia */
              className='sm:mb-0 px-5 py-3 bg-indigo-100 text-indigo-700 mobile:text-center transform hover:bg-white active:top-0.5 placeholder:text-indigo-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 focus-visible outline-none max-w-[500px] md:w-[500px] p-2 rounded-xl border-none shadow-md shadow-zinc-800/5'
              placeholder='Busca la pelicula'/>
            <button 
                className='px-5 py-3 bg-indigo-500 shadow rounded-xl text-indigo-100 hover:bg-indigo-600 hover:text-white active:top-0.5'
                type='submit'>
                  Buscar
            </button>
          </form>
        </div>
      </section>
  )
}

export default Buscador