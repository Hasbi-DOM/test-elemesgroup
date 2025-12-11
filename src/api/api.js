import axios from "axios"

const apiKey = import.meta.env.VITE_APP_APIKEY
const baseUrl = import.meta.env.VITE_APP_BASEURL

export const getMoviePlayNow = async () => {
	const movieNowPlaying = await axios.get(
		`${baseUrl}/movie/now_playing?api_key=${apiKey}`
	)
	return movieNowPlaying.data.results
}

export const getMovieTopRated = async () => {
	
	const movieTopRated = await axios.get(
		`${baseUrl}/movie/top_rated?api_key=${apiKey}`
	)
	return movieTopRated.data.results
}

export const getPopularMovie = async () => {
	const popularMovie = await axios.get(
		`${baseUrl}/movie/popular?api_key=${apiKey}`
	)
	return popularMovie.data.results
}

export const getUpcomingMovie = async () => {
	const upcomingMovie = await axios.get(
		`${baseUrl}/movie/upcoming?api_key=${apiKey}`
	)
	return upcomingMovie.data.results
}

export const getDetailMovie = async (movieId) => {
	const detailMovie = await axios.get(
			`${baseUrl}/movie/?movie_id=${movieId}?api_key=${apiKey}`
		)
	return detailMovie
}