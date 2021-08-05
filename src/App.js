import './App.css';
import { useCallback, useState } from 'react';
import { SearchPage } from './SearchPage';
import { PlaylistPage } from './PlaylistPage';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistPage, setPlaylistPage] = useState(false);

  const addMovieToPlaylist = useCallback((movie) => {
    setPlaylist([...playlist, movie]);
    const confirmation = document.getElementById('confirmation-container');
    confirmation.innerHTML = `${movie.Title} was added to your playlist`;
    setTimeout(() => confirmation.innerHTML = '', 10000)
  }, [playlist, setPlaylist]);

  return (
    <div className='App'>
      {playlistPage ? <PlaylistPage playlist={playlist} /> : <SearchPage addMovieToPlaylist={addMovieToPlaylist} />}
      <button
        className='page-toggle'
        onClick={() => setPlaylistPage(!playlistPage)}>
          {playlistPage ? 'Search' : 'Playlist'}
      </button>
    </div>
  );
}

export default App;
