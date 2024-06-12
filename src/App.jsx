import './App.css'
import SearchSort from './SearchSort'
import MovieList from './MovieList'
import { useState } from 'react'

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showNowPlaying, setShowNowPlaying] = useState(true)


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchClick = () => {
    setShowNowPlaying(false)
  }

  const handleNowPlayingClick = () =>{
    setShowNowPlaying(true)
  }

  return (
    <>

      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort searchQuery={searchQuery} handleSearchChange={handleSearchChange} handleNowPlayingClick={handleNowPlayingClick} handleSearchClick={handleSearchClick}/>
      </header>

      <div>
        <MovieList searchQuery={searchQuery} showNowPlaying={showNowPlaying}/>
      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
