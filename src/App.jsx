import './App.css'
import SearchSort from './SearchSort'
import MovieList from './MovieList'
import { useState } from 'react'

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <>

      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      </header>

      <div>
        <MovieList searchQuery={searchQuery}/>
      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
