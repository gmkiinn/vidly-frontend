import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/movies'>
                Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/customers'>
                Customers
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/rentals'>
                Rentals
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
