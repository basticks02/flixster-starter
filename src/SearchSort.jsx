
import './SearchSort.css'
import PropTypes from 'prop-types'

export default function SearchSort({handleSearchChange, searchQuery}) {
  return (
    <div className='searchsortbar'>
      <div className='search'>
        <input value={searchQuery} onChange={handleSearchChange} type="text" placeholder="Search it"/>
        <button type='submit' value='Submit'>Search</button>
      </div>

      <div>
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
  searchQuery: PropTypes.string
}
