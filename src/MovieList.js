import './MovieList.css';
import React, { useState } from 'react';

// Helper function to filter out duplicate results by
// ensuring uniqe imdbID
function filterDuplicateMovies(movieList) {
	if (movieList.length < 2) return movieList;
	const moviesById = {};
	for (let i = 0; i < movieList.length; i++) {
		const { imdbID } = movieList[i];
		if (!moviesById[imdbID]) {
			moviesById[imdbID] = movieList[i];
		}
	}
	return Object.values(moviesById);
}

// The list of movie results for the current search criteria
function MovieList(props) {
	const { movieList, addMovieFunction } = props;
	const movies = filterDuplicateMovies(movieList)
		.map((result) => <MovieCard addMovieFunction={addMovieFunction} movie={result} />);

	return (
		<div className='movie-list-container'>
			{movies.length > 0 ? <ul aria-label="Movie List">{movies}</ul> : <></>}
		</div>
	);
}

export default React.memo(MovieList);

// An individual card with info on the movie, and a button to add it to the playlist
function MovieCard(props) {
	const { Title, imdbID, Year } = props.movie;
	const [active, setActive] = useState(true);
	return (
		<li aria-label={Title} className='movie-card' key={imdbID + Year}>
			<div className='movie-info'>
				<h2 className='movie-title'>{Title}</h2>
				<h3 className='movie-year'>{Year}</h3>
			</div>
			<button
				className='playlist-button'
				disabled={!active}
				onClick={() => {
					props.addMovieFunction(props.movie);
					setActive(false);
				}}
			>
				{active ? 'Add To Playlist' : 'In Your Playlist'}
			</button>
		</li>
	)
}