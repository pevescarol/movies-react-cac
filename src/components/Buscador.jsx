import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'

const Buscador = () => {

  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/?search=${searchText}`)
  }

  return (
    <section className='w-full relative mt-28'>
        <div className='mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-2x1 flex justify-center text-center relative'>
          <form onSubmit={handleSubmit} className='max-w-[500px] md:w-[500px] bg-indigo-100 flex sm:flex-row justify-between gap-2 items-center font-medium relative rounded-xl focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 focus-visible outline-none  border-none shadow-md shadow-zinc-800/5' >
            <input 
              type="text" 
              value={searchText} /* se pasa el valor */
              onChange={(e) => setSearchText(e.target.value)} /* se actualiza el valor cuando este cambia */
              className='sm:mb-0 px-5 py-3 text-indigo-700 mobile:text-center transform hover:bg-white active:top-0.5 w-full bg-transparent placeholder:text-indigo-400 outline-none'
              placeholder='Buscar pelicula'/>
            <button 
                className='absolute right-0 px-5 py-3 text-indigo-500 rounded-xl border-none hover:text-white active:top-0.5'
                type='submit'>
                  <ImSearch />
            </button>
          </form>
        </div>
      </section>
  )
}

export default Buscador