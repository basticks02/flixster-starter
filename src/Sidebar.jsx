import PropTypes from 'prop-types'
import './Sidebar.css'

export default function Sidebar({likedMovies}) {
  return (
    <div className='sidebar-open'>
        <h2>Liked Movies <i className='fa-solid fa-heart' style={{color: 'red'}}></i> </h2>
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
