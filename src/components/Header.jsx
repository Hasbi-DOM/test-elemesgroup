import { Box, Typography, Button } from "@mui/material"

const Header = () => {
	return (
		<div className="px-8 py-4 bg-sky-600 flex items-center justify-between">
			<div>
				<p className="text-white text-4xl">CINEMA</p>
			</div>
			<div>
				<Button>
					<Typography variant="h3">Favorite</Typography>
				</Button>
				<Button sx={{ml: '50px'}}>
					<Typography variant="h3">Watchlist</Typography>
				</Button>
			</div>
		</div>
	)
}

export default Header