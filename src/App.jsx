import './App.css';
import PeliculasGrid from './components/PeliculasGrid';

function App() {
  return (
    <div>
      <header className='title'>
        Peliculas
      </header>
      <main>
          <PeliculasGrid />
        </main>
    </div>
  );
}

export default App;
