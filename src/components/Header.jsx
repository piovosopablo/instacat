import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import home from '../assets/static/home.png';
import search from '../assets/static/search.png';
import favorite from '../assets/static/favorite.png';
import logo from '../../public/Icon.png';

// Header fijo: Home, Search & favorites
const Header = () => (
  <header className='header'>
    <section>
      <nav className='menu' aria-label='main-navigation'>
        <span className='title'>
          <img className='hero-image' src={logo} alt='Instacat logo' />
        </span>
        <ul>
          <li className='menu-active'>
            <Link className='nav-item' to='/'>
              <figure>
                <img src={home} alt='Home icon' />
              </figure>
              <p className='nav-text'>Home</p>
            </Link>
          </li>
          <li>
            <Link className='nav-item' to='/search'>
              <figure>
                <img src={search} alt='Search icon' />
              </figure>
              <p className='nav-text'>Search</p>
            </Link>
          </li>
          <li>
            <Link className='nav-item' to='/favorites'>
              <figure>
                <img src={favorite} alt='Favorite icon' />
              </figure>
              <p className='nav-text'>Favorites</p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Header;
