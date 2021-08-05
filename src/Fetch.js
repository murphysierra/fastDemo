const apiKey = "4bfb31c1";

export default function getMovieResults(searchInput) {
	return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
		.then(result => result.json())
		.catch(error => console.warn("Error: ", error));
}