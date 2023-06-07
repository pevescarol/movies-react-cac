import Buscador from "../components/Buscador"
import PeliculasGrid from "../components/PeliculasGrid"


const LandingPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-5">
      <Buscador />
      <PeliculasGrid />
    </main>
  )
}

export default LandingPage