import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Layout from './layout/Layout'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <Router>
		<Routes >
			<Route path='/' element={<Layout/>}>
				<Route path='' element={<Home/>}></Route>
				<Route path='/favorite' element={<Favorite/>}></Route>
				<Route path='/detail-movie/:id' element={<MovieDetail/>}></Route>
			</Route>
		</Routes>
	</Router>
  )
}

export default App
