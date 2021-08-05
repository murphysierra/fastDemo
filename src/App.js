import './App.css';
import { useCallback, useEffect, useState } from 'react';
import getMovieResults from "./Fetch";
import { MovieList } from './MovieList';

function App() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (searchInput !== "") {
      getMovieResults(searchInput)
      .then((response) => {
        if (response && response.Search) {
          setMovieResults(response.Search); // need to deduplicate results
        }
        // Handle results that don't fail, but return "no results" or "too many results"
        else if (response.Response === "False") {
          setMovieResults([]);
        }
        console.log("response: ", response);
      });
    }
  }, [searchInput]);

  const addMovieToPlaylist = useCallback((movie) => {
    setPlaylist([...playlist, movie]);
  }, [playlist, setPlaylist]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)}></input>
      <MovieList addMovieFunction={addMovieToPlaylist} movieList={movieResults} />
     </div>
  );
}

export default App;
