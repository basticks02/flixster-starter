import PropTypes from 'prop-types'
import './Sidebar.css'

export default function Sidebar({likedMovies}) {
  return (
    <div className='sidebar'>
        <h3>Liked Movies</h3>
        <ul>
            {likedMovies.map(movie => (
                <li key={movie.id}>{movie.original_title}</li>
            ))}
        </ul>
    </div>
  )
}

Sidebar.propTypes = {
  likedMovies: PropTypes.array,
}
