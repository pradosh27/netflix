import React from 'react'
import logo from '../Components/netflix.jpg';
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";
const Header = () => {
    // console.log(logo);
  return (
    <nav className='header'>
        <img src={logo} alt="error" />
        <div>
          <Link to="/tvshows">TVShows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyadded">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </div>

        <ImSearch />
        
    </nav>
  )
}

export default Header
