//importing in the necessary items
import React from 'react';
import {NavLink} from 'react-router-dom';


//Nav links for each page
const Nav = props => (
    // <nav className="main-nav">
    //     <ul>
    //         <li><NavLink exact to='/'>Home</NavLink></li>
    //         <li><NavLink to='/about'>Flowers</NavLink></li>
    //         <li><NavLink to='/dogs'>Dogs</NavLink></li>
    //         <li><NavLink to='/tokyo'>Tokyo</NavLink></li>
    //         <li><NavLink to='/search'>Search</NavLink></li>
    //     </ul>
    // </nav>

    <nav className="navbar fixed-top navbar-light bg-light">
      <li className="navbar-brand"><NavLink exact to='/'><img src="static/img/pylon.svg" alt="Pylon Logo" /></NavLink></li>
      <li className="navbar-brand">Miss_Pylons</li>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#about-section">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Schedule</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Social</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
);

export default Nav;
