import { Container, Box, Typography, CircularProgress, Modal } from "@mui/material"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailMovie } from "../api/api";
import axios from "axios";


function MovieDetail () {
	const baseUrl = import.meta.env.VITE_APP_BASEURL
	const apiKey = import.meta.env.VITE_APP_APIKEY
	const [posterPath, setPosterPath] = useState('')
	const [titleMovie, setTitleMovie] = useState('')
	const [releaseDate, setReleaseDate] = useState('')
	const [popularity, setPopularity] = useState('')
	const [votedCount, setVotedCount] = useState('')
	const [overview, setOverview] = useState('')
	const [genres, setGenres] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const { id } = useParams();
	const getDetailMovie = async () => {
		setIsLoading(true)
		const detailMovie = await axios.get(
				`${baseUrl}/movie/${id}?api_key=${apiKey}`
			)
		if (detailMovie.status === 200) {
			setPosterPath(detailMovie.data.belongs_to_collection?.poster_path)
			setTitleMovie(detailMovie.data?.original_title)
			setReleaseDate(detailMovie.data?.release_date)
			setPopularity(detailMovie.data?.vote_average)
			setVotedCount(detailMovie.data?.vote_count)
			setGenres(detailMovie.data?.genres)
			setOverview(detailMovie.data?.overview)
		}
		setIsLoading(false)
	}
	useEffect(() => {
		getDetailMovie()
	}, [id])
	const handleClickRate = (val) => {
		console.log(val)
	}
	
	return(
		<div className="w-full flex items-start gap-4">
			<Modal
				open={isLoading}
			>
				<div className="h-full flex flex-col justify-center items-center">
					<CircularProgress
						size="3rem"
					/>
				</div>
			</Modal>
			<a href="/" className="text-white hover:text-sky-600 cursor-pointer">
				<ArrowBackOutlinedIcon/>
			</a>
			<div className="w-1/4">
				<img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${posterPath}`} alt="movie_img" />
			</div>
			<div className="w-3/4 space-y-8">
				<div className='space-y-4'>
					<div className="flex items-start justify-between">
						<div>
							<p className="text-white text-xl font-semibold">{titleMovie}</p>
							<p className="text-gray-400 text-sm">({releaseDate})</p>
						</div>
						<div className="flex  mt-6 gap-2">
							<BookmarkBorderOutlinedIcon fontSize="small" sx={{color: '#FFF'}}/>
							<FavoriteOutlinedIcon fontSize="small" sx={{color: '#FFF'}}/>	
						</div>
					</div>
					<div>
						<p className="text-white">{overview}</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="w-fit bg-gray-800 p-2 rounded">
							<p className="text-white">{parseFloat(popularity).toFixed(1)}</p>
						</div>
						<div className="space-y-1">
							{
								[1,2,3,4,5,6,7,8,9,10].map((data,i) => (
									<button key={i} className="cursor-pointer" onClick={(val) => handleClickRate(data, val.target.value)}>
										<StarOutlinedIcon className="text-white text-md hover:text-red-400"/>
									</button>
								))
							}
							<div className="flex items-center gap-2">
								<AccountCircleOutlinedIcon className="text-sm text-white"/>
								<p className="text-sm text-white">{votedCount} Votes</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 mt-2">
					<div className="text-white flex items-center gap-4">
						{
							genres.map((data, index) => (
								<p>{data.name}</p>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetail