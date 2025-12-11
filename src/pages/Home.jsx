import { Link } from "react-router-dom";
import { getMoviePlayNow, getMovieTopRated, getPopularMovie, getUpcomingMovie } from "../api/api"
import { useEffect, useState } from "react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { MovCard } from "../components/MovieCard";
import { SwiperCard } from "../components/SwiperCard";
function Home () {
	const [nowPlayingMovie, setNowPlayingMovie] = useState([])
	const [topRatedMovie, setTopRatedMovie] = useState([])
	const [popularMovie, setPopularMovie] = useState([])
	const [upcomingMovie, setUpcomingMovie] = useState([])
	const [idMovie, setIdMovie] = useState([])
	useEffect(() => {
		getMoviePlayNow().then((movieList) => {
			setNowPlayingMovie(movieList)
			let arrayDataId = []
			for (let i = 0; i < movieList.length; i++) {
				arrayDataId.push(movieList[i].id)
			}
			setIdMovie(arrayDataId)
		})
		
		getMovieTopRated().then((movieList) => {
			setTopRatedMovie(movieList)
		})

		getPopularMovie().then((movieList) => {
			setPopularMovie(movieList)
		})

		getUpcomingMovie().then((movieList) => {
			setUpcomingMovie(movieList)
		})
	}, [])
	return (
			<div>
				<div className="space-y-8">
					<p className="text-white text-2xl">Now Playing</p>
					<div className="w-full flex flex-col justify-center">
						<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
						{
							nowPlayingMovie.map((movie) => {
								return(
									<Link to={`/detail-movie/${movie.id}`}>
										<MovCard
											title={movie.title}
											releaseDate={movie.release_date}
											posterPath={movie.poster_path}
										/>
									</Link>
								)
							})
						}
						</div>
					</div>
				</div>
				<div className="mt-12 space-y-8">
					<p className="mb-8 text-white text-2xl">Top Rated</p>
					<SwiperCard
						data={topRatedMovie}
					/>
				</div>
				<div className="mt-12 space-y-8">
					<p className="mb-8 text-white text-2xl">Popular Movie</p>
					<SwiperCard
						data={popularMovie}
					/>
				</div>
				<div className="mt-12 space-y-8">
					<p className="mb-8 text-white text-2xl">Upcoming Movie</p>
					<SwiperCard
						data={upcomingMovie}
					/>
				</div>
			</div>
	)
}
export default Home