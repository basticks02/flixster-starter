import './App.css'
import SearchSort from './SearchSort'
import MovieList from './MovieList'

export default function App() {

  return (
    <>

      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort />
      </header>

      <div>
        <MovieList/>
      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
