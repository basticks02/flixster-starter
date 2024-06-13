
import './MovieCard.css'
import PropTypes from 'prop-types'
import video from './assets/video.png'

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

    let img_src = null
    if(movie_poster === null){
      img_src = video
    }
    else{
      img_src = "https://image.tmdb.org/t/p/w500"+movie_poster;
    }

  return (
    <div className='moviecard' onClick={() => handleOpenModal(movie)}>

        <img className='cardimg' src={img_src} />

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
