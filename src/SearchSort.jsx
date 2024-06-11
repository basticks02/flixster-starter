// import React from 'react'
import './SearchSort.css'

export default function SearchSort() {
  return (
    <div className='searchsortbar'>
      <div className='search'>
        <input type="text" placeholder="Search it"/>
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
