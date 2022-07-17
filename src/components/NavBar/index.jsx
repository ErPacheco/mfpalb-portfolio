import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function NavBar() {
  const isActiveClass = (isActive) => {
    return isActive ? 'selected' : '';
  };

  return (
    <div className='navbar-block'>
      <div className='navbar-links'>
        <NavLink to={'/about-me'} className={isActiveClass}>
          About me
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;

