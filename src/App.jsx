import './App.css'
import SearchSort from './SearchSort'
import MovieList from './MovieList'
import Modal from './Modal'
import { useState } from 'react'

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showNowPlaying, setShowNowPlaying] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchClick = () => {
    setShowNowPlaying(false)
  }

  const handleNowPlayingClick = () =>{
    setShowNowPlaying(true)
  }

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedMovie(null)
  }

  return (
    <>

      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort searchQuery={searchQuery} handleSearchChange={handleSearchChange} handleNowPlayingClick={handleNowPlayingClick} handleSearchClick={handleSearchClick}/>
      </header>

      <div>
        <MovieList searchQuery={searchQuery} showNowPlaying={showNowPlaying} handleOpenModal={handleOpenModal}/>
        {showModal && <Modal movie={selectedMovie} handleCloseModal={handleCloseModal}/>}
      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
