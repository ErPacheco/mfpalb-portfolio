import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function NavBar() {
	const isActiveClass = ({ isActive }) => {
		return isActive ? 'selected' : '';
	};

	return (
		<div className='navbar-container'>
			<div className='navbar-block'>
				<div className='navbar-links'>
					<NavLink to={'/about-me'} className={isActiveClass}>
						About me
					</NavLink>
					<NavLink to={'/experience'} className={isActiveClass}>
						Experience
					</NavLink>
					<NavLink to={'/experience2'} className={isActiveClass}>
						Experience
					</NavLink>
					<NavLink to={'/experience3'} className={isActiveClass}>
						Experience
					</NavLink>
					<NavLink to={'/experience4'} className={isActiveClass}>
						Experience
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
