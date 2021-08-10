const apiKey = '4bfb31c1';

export default function getMovieResults(searchInput, yearInput) {
	const search = searchInput !== '' ? '&s=' + searchInput : '';
	const year = yearInput !== '' ? '&y=' + yearInput : '';
	return fetch( `http://www.omdbapi.com/?apikey=${apiKey}${search}${year}`, {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(result => result.json())
		.catch(error => console.warn('Error: ', error));
}