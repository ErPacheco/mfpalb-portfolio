import React from 'react';
import NavBar from './components/NavBar/index.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx';
import NotFound from './pages/NotFound.jsx';
import HomePage from './pages/HomePage.jsx';

const Home = () => {
	return (
		<BrowserRouter>
			<div className='home'>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/about-me' element={<AboutMe />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default Home;
