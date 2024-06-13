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
  const [selectedGenre, setSelectedGenre] = useState('')
  const [sortOption , setSortOption] = useState('')


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

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId)
    setShowNowPlaying(false)
  }

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption)
  }

  return (
    <>

      <header>
        <h1 style={{textAlign: 'center'}}>Flixster</h1>
        <SearchSort
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleNowPlayingClick={handleNowPlayingClick}
        handleSearchClick={handleSearchClick}
        handleGenreChange={handleGenreChange}
        handleSortChange={handleSortChange}
        />
      </header>

      <div>
        <MovieList
        searchQuery={searchQuery}
        showNowPlaying={showNowPlaying}
        handleOpenModal={handleOpenModal}
        selectedGenre={selectedGenre}
        sortOption={sortOption}
        />
        {showModal && <Modal movie={selectedMovie} handleCloseModal={handleCloseModal}/>}
      </div>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
