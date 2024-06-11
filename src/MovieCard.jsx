
import './MovieCard.css'

export default function MovieCard({movie}) {
    let movie_poster = movie.backdrop_path;

  return (
    <div className='moviecard'>

        <img className='cardimg' src={"https://image.tmdb.org/t/p/w500"+movie_poster} />

        <div className='info'>
            <h4>{movie.original_title}</h4>
            <p>Rating: {movie.vote_average}</p>
        </div>
    </div>
  )
}
