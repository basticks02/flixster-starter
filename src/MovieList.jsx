import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './MovieList.css'
import MovieCard from './MovieCard'

const fetchData = async (apiKey, page, setMovies, searchQuery) => {
  try {
    const endpoint = searchQuery ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`
    : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(endpoint);
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

export default function MovieList({searchQuery}) {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchData(apiKey, page, setMovies, searchQuery);
  }, [apiKey, page, searchQuery]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  }

  return (
    <>

      <div className='cardcontainer'>
      {movies.length > 0 ? movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        )) : <p>No movies found</p>}
      </div>

      <div className='button'>
            <button onClick={loadMore}>
                Load More
            </button>
      </div>

    </>
  )
}

MovieList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
}
