/** @format */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Vidly
      </Link>
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav '>
          <NavLink className='nav-link nav-item' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-link nav-item' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-link nav-item' to='/rentals'>
            Rentals
          </NavLink>
        </div>
        <button type='button' className='btn btn-outline-primary ml-auto'>
          <NavLink to='/login'>Login</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
