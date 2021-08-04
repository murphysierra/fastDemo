const apiKey = "4bfb31c1";

export default async function getMovieResults(searchInput) {
	const result = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);
	return result.json();
}