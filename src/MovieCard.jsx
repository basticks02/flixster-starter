
import './MovieCard.css'
import PropTypes from 'prop-types'

export default function MovieCard({movie}) {
    let movie_poster = movie.backdrop_path;

    const getRating = (rating) => {
        if (rating < 5) {
          return 'low';
        }
        else if (rating >=5 && rating < 7) {
          return 'medium';
        }
        else{
          return 'high';
        }
    }

  return (
    <div className='moviecard'>

        <img className='cardimg' src={"https://image.tmdb.org/t/p/w500"+movie_poster} />

        <div className='info'>
            <h4>{movie.original_title}</h4>
            <p className={getRating(movie.vote_average)}> {movie.vote_average}</p>
        </div>
    </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.object
}
