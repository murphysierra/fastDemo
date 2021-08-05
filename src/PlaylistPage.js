import './PlaylistPage.css';

export function PlaylistPage(props) {
	const playlist = props.playlist;
	const playlistElements = playlist.map((movie) => <li key={movie.imdbID}>{movie.Title}</li>);

	return (
		<div className="playlist">
			<h1>Playlist</h1>
			{playlist.length === 0 ? "There are no items in your playlist yet" : <ul>{playlistElements}</ul>}
			<footer>My favorite color is blue</footer>
		</div>
	);
}