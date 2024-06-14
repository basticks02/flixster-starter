
import './SearchSort.css'
import PropTypes from 'prop-types'

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10406, name: 'War' },
  { id: 37, name: 'Western' },
];

export default function SearchSort({handleSearchChange, searchQuery, handleNowPlayingClick, handleSearchClick, handleGenreChange, handleSortChange}) {

  return (
    <div className='searchsortbar'>

      <div className='search'>
        <input className='searchbox' style={{marginRight: "5px"}} value={searchQuery} onChange={handleSearchChange} type="text" placeholder="Search it"/>
        <button type='submit' value='Submit' onClick={handleSearchClick}>Search</button>
      </div>

      <div className='nowplaying'>
        <button type='submit' onClick={handleNowPlayingClick}>Now Playing</button>
      </div>

      <div className='sort'>
        <select className='sortbox' name="sort" id="Sort" onChange={(e) => handleSortChange(e.target.value)}>
          <option value="names">Sort By Trending</option>
          <option value="likes">Sort By Likes</option>
          <option value="date">Sort By Date</option>
          <optgroup label='Sort By Genre'>
            {genres.map(genre =>(
              <option key={genre.id} value={genre.id} onClick={() => handleGenreChange(genre.id)}>{genre.name}</option>
            ))}
          </optgroup>
        </select>
      </div>
    </div>
  )
}

SearchSort.propTypes = {
  handleSearchChange: PropTypes.func,
  searchQuery: PropTypes.string,
  handleNowPlayingClick: PropTypes.func,
  handleSearchClick: PropTypes.func,
  handleGenreChange: PropTypes.func,
  handleSortChange: PropTypes.func,
}
