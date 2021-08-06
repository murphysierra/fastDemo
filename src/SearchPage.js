import './App.css';
import { useEffect, useState } from 'react';
import getMovieResults from './Fetch';
import MovieList from './MovieList';

export function SearchPage(props) {
	const { addMovieToPlaylist } = props;
	const [movieResults, setMovieResults] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [yearInput, setYearInput] = useState('');

	useEffect(() => {
		if (searchInput !== '' || yearInput !== '') {
			getMovieResults(searchInput, yearInput)
				.then((response) => {
					if (response && response.Search) {
						setMovieResults(response.Search); // need to deduplicate results
					}
					// Handle results that don't fail, but return 'no results' or 'too many results'
					else if (response && response.Response === 'False') {
						setMovieResults([]);
					}
					console.log('response: ', response);
				});
		} else if (searchInput === '' && yearInput === '') setMovieResults([]);
	}, [searchInput, yearInput]);


	return (
		<div>
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
				<div id='confirmation-container' />
			</div>
			<MovieList addMovieFunction={addMovieToPlaylist} movieList={movieResults} />
		</div>
	);
}