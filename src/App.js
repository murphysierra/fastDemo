import './App.css';
import { useCallback, useEffect, useState } from 'react';
import getMovieResults from './Fetch';
import { MovieList } from './MovieList';

function App() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (searchInput !== '') {
      getMovieResults(searchInput, yearInput)
      .then((response) => {
        if (response && response.Search) {
          setMovieResults(response.Search); // need to deduplicate results
        }
        // Handle results that don't fail, but return 'no results' or 'too many results'
        else if (response.Response === 'False') {
          setMovieResults([]);
        }
        console.log('response: ', response);
      });
    }
  }, [searchInput, yearInput]);

  const addMovieToPlaylist = useCallback((movie) => {
    setPlaylist([...playlist, movie]);
  }, [playlist, setPlaylist]);

  return (
    <div className='App'>
      <div className='search-bar'>
        <h1>Search For Movies</h1>
        <input
          type='text'
          placeholder='Title'
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} />
        <input
          type='number'
          min={1800}
          max={3000}
          placeholder='Year'
          value={yearInput}
          onChange={(event) => setYearInput(event.target.value)} />
      </div>
      <MovieList addMovieFunction={addMovieToPlaylist} movieList={movieResults} />
     </div>
  );
}

export default App;
