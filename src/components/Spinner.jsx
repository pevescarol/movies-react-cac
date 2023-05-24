import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
  return (
    <div className="relative flex h-screen items-center place-content-center">
      <FaSpinner className='text-indigo-500 animate-spin' size={60} />
    </div>
  )
}

export default Spinner