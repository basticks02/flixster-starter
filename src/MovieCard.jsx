
import './MovieCard.css'
import PropTypes from 'prop-types'
import video from './assets/video.png'
import { useState } from 'react'


const roundedoff = (rating) => {
  return parseFloat(rating).toFixed(1);
}

export default function MovieCard({movie, handleOpenModal, handleLikeMovie}) {
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

    const [likeColor, setLikeColor] = useState('grey');
    const handleLikeClick = (like) => {
      like.stopPropagation();
      setLikeColor(prev => prev === 'grey' ? 'red' : 'grey');
      handleLikeMovie(movie);
    }

    const [starColor, setStarColor] = useState('grey');
    const handleStarClick = (watched) => {
      watched.stopPropagation();
      setStarColor(prev => prev === 'grey' ? 'rgb(10, 10, 109)' : 'grey');
    }

  return (
    <div className='moviecard' onClick={() => handleOpenModal(movie)}>

        <img className='cardimg' src={img_src} />

        <div className='info'>
          <h4>{movie.original_title}</h4>
          <div className='details'>
              <i style={{color: likeColor}} className='fas fa-heart icon' onClick={handleLikeClick}></i>
              <i style={{color: starColor}} className="fa-solid fa-eye" onClick={handleStarClick}></i>
              <p className={getRating(movie.vote_average)}> {rating}</p>
          </div>
        </div>
    </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.object,
    handleOpenModal: PropTypes.func,
    handleLikeMovie: PropTypes.func
}
