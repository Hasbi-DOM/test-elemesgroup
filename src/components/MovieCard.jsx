export const MovCard = ({title, releaseDate, posterPath, className}) => {
	return (
		<div className="w-48 bg-[#050E12] rounded-md transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-800">
			<img className={`w-fit object-cover rounded-t-md ${className}`} src={`${import.meta.env.VITE_APP_BASEIMGURL}/${posterPath}`} alt="" />
			<div className="px-3 py-4">
				<p className="text-white text-md truncate">{title}</p>
				<p className="text-gray-400 text-sm">{releaseDate}</p>
			</div>
		</div>
	)
}