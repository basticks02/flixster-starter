
import './MovieCard.css'
import PropTypes from 'prop-types'

const roundedoff = (rating) => {
  return parseFloat(rating).toFixed(1);
}

export default function MovieCard({movie, handleOpenModal}) {
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

    const rating = roundedoff(movie.vote_average);

  return (
    <div className='moviecard' onClick={() => handleOpenModal(movie)}>

        <img className='cardimg' src={"https://image.tmdb.org/t/p/w500"+movie_poster} />

        <div className='info'>
            <h4>{movie.original_title}</h4>
            <p className={getRating(movie.vote_average)}> {rating}</p>
        </div>
    </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.object,
    handleOpenModal: PropTypes.func
}
