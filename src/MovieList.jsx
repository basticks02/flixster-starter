import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './MovieList.css'
import MovieCard from './MovieCard'

const fetchData = async (apiKey, page, setMovies, searchQuery, showNowPlaying, appendMovies) => {
  try {
    const endpoint = searchQuery && !showNowPlaying ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`
    : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    if (appendMovies) {
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    }
    else{
      setMovies(data.results);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default function MovieList({searchQuery, showNowPlaying}) {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchQuery, showNowPlaying]);

  useEffect(() =>{
      fetchData(apiKey, page, setMovies, searchQuery, showNowPlaying, page>1);
  }, [apiKey, page, searchQuery, showNowPlaying]);


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
  showNowPlaying: PropTypes.bool
}
