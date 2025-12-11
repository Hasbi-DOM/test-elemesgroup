import { Container } from "@mui/material"
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	return (
		<Container
		disableGutters
		maxWidth="100vw"
		>
			<Header/>
			<div className="px-20 py-12">
				<Outlet/>
			</div>
		</Container>
	)
}

export default Layout