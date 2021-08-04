import './App.css';
import { useEffect, useState } from 'react';
import getMovieResults from "./Fetch";
import { MovieList } from './MovieList';

function App() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput !== "") {
      getMovieResults(searchInput)
      .then((response) => {
        if (response && response.Search) {
          setMovieResults(response.Search); // need to deduplicate results
        }
        console.log("response: ", response);
      });
    }
  }, [searchInput]);


  // console.log("list: ", movieList);
  console.log("search: ", searchInput);
  return (
    <div className="App">
      <header className="App-header"></header>
      <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)}></input>
      <MovieList movies={movieResults} />
     </div>
  );
}

export default App;
