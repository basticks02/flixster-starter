import './Modal.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

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

    const [videoKey, setVideoKey] = useState('');
    const [fadeClass, setFadeClass] = useState('fade-in')

    useEffect(() => {
        const fetchVideo = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const youtubeVideo = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
        setVideoKey(youtubeVideo ? youtubeVideo.key : '');
        };

        fetchVideo();
    }, [movie.id]);

    const handleClose = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
          handleCloseModal();}, 500);}

  return (
    <>
    <div className='modal'>
        <div className={`modal-content ${fadeClass}`}style={{
             backgroundImage: `url(${"https://image.tmdb.org/t/p/w500"+movie.backdrop_path})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             }}>
            <span className="close" onClick={handleClose}>&times;</span>
            <div className="modal-info">
                <div className='modalhead'>
                    <h1>{movie.original_title} </h1>
                    <h1 className={getRating(movie.vote_average)}>{rating}</h1>
                </div>

                <div className='modalstuff'>
                    <div className='stufftext'>
                        <p><strong>Release Date: </strong>{movie.release_date}</p>
                        <p><strong>Overview: </strong>{movie.overview}</p>
                        <p><strong>Genre: </strong>{genres}</p>
                    </div>
                    <iframe className='utube'
                        width="560px"
                        height="315px"
                        src={`https://www.youtube.com/embed/${videoKey}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{boxShadow: '0 4px 8px rgba(0, 0, 0, .5)'}}
                        allowFullScreen></iframe>
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
