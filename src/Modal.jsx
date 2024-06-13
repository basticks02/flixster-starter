import './Modal.css';
import PropTypes from 'prop-types';

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

function getGenres(genreID) {
    switch (genreID) {
        case 28:
            return 'Action';
        case 12:
            return 'Adventure';
        case 16:
            return 'Animation';
        case 35:
            return 'Comedy';
        case 80:
            return 'Crime';
        case 99:
            return 'Documentary';
        case 18:
            return 'Drama';
        case 10751:
            return 'Family';
        case 14:
            return 'Fantasy';
        case 36:
            return 'History';
        case 27:
            return 'Horror';
        case 10402:
            return 'Music';
        case 9648:
            return 'Mystery';
        case 10749:
            return 'Romance';
        case 878:
            return 'Science Fiction';
        case 10770:
            return 'TV Movie';
        case 53:
            return 'Thriller';
        case 10406:
            return 'War';
        case 37:
            return 'Western';
        default:
            return 'Unknown';
    }
}

const roundedoff = (rating) => {
    return parseFloat(rating).toFixed(1);
}

export default function Modal({movie, handleCloseModal}) {
    const genres = movie.genre_ids.map(id => getGenres(id)).join(', ');
    const rating = roundedoff(movie.vote_average);

  return (
    <>
    <div className='modal'>
        <div className='modal-content'>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className="modal-info">
                <div className='modalhead'>
                    <h1>{movie.original_title} </h1>
                    <h1 className={getRating(movie.vote_average)}>{rating}</h1>
                </div>

                <div className='modalstuff'>
                    <img className='modal-img' src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} alt={movie.original_title}/>

                    <p>Release Date: {movie.release_date}</p>
                    <p>Runtime: </p>
                    <p>Overview: {movie.overview}</p>
                    <p>Genre: {genres}</p>
                </div>
            </div>

           <div className="modal-each-song"></div>
        </div>
    </div>
    </>
  )
}

Modal.propTypes = {
    movie: PropTypes.object,
    handleCloseModal: PropTypes.func,

}
