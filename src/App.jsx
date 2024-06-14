import './App.css'
import SearchSort from './SearchSort'
import MovieList from './MovieList'
import Modal from './Modal'
import Sidebar from './Sidebar'
import { useState } from 'react'
import flixerpic from './assets/flixerpic.gif'

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showNowPlaying, setShowNowPlaying] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState('')
  const [sortOption , setSortOption] = useState('')
  const [likedMovies, setLikedMovies] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


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

  const handleLikeMovie = (movie) => {
    setLikedMovies(prevLikedMovies =>{
      if(prevLikedMovies.some(m => m.id === movie.id)){
        return prevLikedMovies.filter(m => m.id !== movie.id)
    }else{
      return [...prevLikedMovies, movie]
    }
    })
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <>

      <header>
        <div className='headline'>
          <img className="flixerpic" src={flixerpic}/>
          <h1 style={{textAlign: 'center'}}>Flixster</h1>
        </div>
        <SearchSort
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleNowPlayingClick={handleNowPlayingClick}
        handleSearchClick={handleSearchClick}
        handleGenreChange={handleGenreChange}
        handleSortChange={handleSortChange}
        />
        <button onClick={toggleSidebar} className='sidebar-toggle'>
          <i className={`fa-solid ${isSidebarOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </header>

      <main style={{backgroundColor: 'rgba(134, 133, 133, 0.1)'}}>
        <MovieList
        searchQuery={searchQuery}
        showNowPlaying={showNowPlaying}
        handleOpenModal={handleOpenModal}
        selectedGenre={selectedGenre}
        sortOption={sortOption}
        handleLikeMovie={handleLikeMovie}
        />
        {showModal && <Modal movie={selectedMovie} handleCloseModal={handleCloseModal}/>}
        {isSidebarOpen && <Sidebar likedMovies={likedMovies}/>}
      </main>

      <footer>
        <p>@2024 Flixter</p>
      </footer>

    </>
  )
}
