
import './SearchSort.css'
import PropTypes from 'prop-types'

export default function SearchSort({handleSearchChange, searchQuery, handleNowPlayingClick, handleSearchClick}) {
  return (
    <div className='searchsortbar'>

      <div className='search'>
        <input style={{marginRight: "5px"}} value={searchQuery} onChange={handleSearchChange} type="text" placeholder="Search it"/>
        <button type='submit' value='Submit' onClick={handleSearchClick}>Search</button>
      </div>

      <div className='nowplaying'>
        <button type='submit' onClick={handleNowPlayingClick}>Now Playing</button>
      </div>

      <div className='sort'>
        <select name="sort" id="Sort">
          <option value="names">Sort By Name</option>
          <option value="likes">Sort By Likes</option>
          <option value="date">Sort By Date</option>
        </select>
      </div>
    </div>
  )
}

SearchSort.propTypes = {
  handleSearchChange: PropTypes.func,
  searchQuery: PropTypes.string,
  handleNowPlayingClick: PropTypes.func,
  handleSearchClick: PropTypes.func
}
