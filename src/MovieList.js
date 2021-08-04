import './MovieList.css';

export function MovieList(props) {
	const movies = props.movies;
	const movieList = movies.map((result) => <MovieCard movie={result} />);

	return (
		<div className="movie-list-container">
			{movieList.length > 0 ? <ul>{movieList}</ul> : <></>}
		</div>
	);
}

export function MovieCard(props) {
	const { Title, imdbID } = props.movie;
	return (
		<li key={imdbID}>{Title}</li>
	)
}