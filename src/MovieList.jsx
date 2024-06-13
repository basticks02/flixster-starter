import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './MovieList.css'
import MovieCard from './MovieCard'

const fetchData = async (apiKey, page, setMovies, searchQuery, showNowPlaying, appendMovies, selectedGenre) => {
  try {
    // const endpoint = searchQuery && !showNowPlaying ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`
    // : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;

    let endpoint;
    if (selectedGenre) {
      endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${selectedGenre}`;
    } else if (searchQuery && !showNowPlaying) {
      endpoint = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`;
    } else {
      endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
    }

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

export default function MovieList({searchQuery, showNowPlaying, handleOpenModal, selectedGenre, sortOption}) {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchQuery, showNowPlaying, selectedGenre]);

  useEffect(() =>{
      fetchData(apiKey, page, setMovies, searchQuery, showNowPlaying, page>1, selectedGenre);
  }, [apiKey, page, searchQuery, showNowPlaying, selectedGenre]);


  const loadMore = () => {
    setPage(prev => prev + 1);
  }

  const sortMovies = (movies, sortOption) => {
    switch (sortOption) {
      case 'name':
        return [...movies].sort((a, b) => a.original_title.localeCompare(b.original_title));
      case 'likes':
        return [...movies].sort((a, b) => b.vote_average - a.vote_average);
      case 'date':
        return [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      default:
        return movies;
    }
  };

  const sortedMovies = sortMovies(movies, sortOption);

  // const filteredMovies = selectedGenre ? movies.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre))) : movies;

  // useEffect(() => {
  //   if(selectedGenre){
  //     setMovies(filteredMovies);
  //   }
  // }, [filteredMovies, selectedGenre])

  return (
    <>

      <div className='cardcontainer'>
      {sortedMovies.length > 0 ? sortedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} handleOpenModal={handleOpenModal}/>
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
  showNowPlaying: PropTypes.bool,
  handleOpenModal: PropTypes.func,
  selectedGenre: PropTypes.string,
  sortOption: PropTypes.string
}
