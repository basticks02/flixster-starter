import { useState, useEffect } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'

const fetchData = async (apiKey, page, setMovies) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`);
    const data = await response.json();
    console.log(data);
    if (page > 1) {
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    }
    else{
        setMovies(data.results);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchData(apiKey, page, setMovies, false);
  }, [apiKey, page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  }

  return (
    <>

      <div className='cardcontainer'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={ movie } />
        ))}
      </div>

      <div className='button'>
            <button onClick={loadMore}>
                Load More
            </button>
      </div>

    </>
  )
}
