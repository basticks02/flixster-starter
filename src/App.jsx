import { useState, useEffect } from 'react'
import './App.css'
import SearchSort from './SearchSort'
import MovieCard from './MovieCard'

// const fetchData = async () => {
//   const apiKey = import.meta.env.VITE_API_KEY;
//   const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=en-US');
//   const data = await response.json();
//   setMovieData(data);
// }

const fetchData = async (apiKey, setMovies) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default function App() {

  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchData(apiKey, setMovies);
  }, [apiKey]);

  return (
    <div className="App">
      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort />
      </header>

      <div className='cardcontainer'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={ movie } />
        ))}

      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>
    </div>
  )
}
