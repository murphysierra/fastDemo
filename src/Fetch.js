const apiKey = '4bfb31c1';

export default function getMovieResults(searchInput, yearInput) {
	const search = searchInput !== '' ? '&s=' + searchInput : '';
	const year = yearInput !== '' ? '&y=' + yearInput : '';
	return fetch(`https://www.omdbapi.com/?apikey=${apiKey}${search}${year}`)
		.then(result => result.json())
		.catch(error => console.warn('Error: ', error));
}