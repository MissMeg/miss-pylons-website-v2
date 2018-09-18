//importing in the necessary items
import React from 'react';
import {NavLink} from 'react-router-dom';


//Nav links for each page
const Footer = props => (
    // <nav className="main-nav">
    //     <ul>
    //         <li><NavLink exact to='/'>Home</NavLink></li>
    //         <li><NavLink to='/about'>Flowers</NavLink></li>
    //         <li><NavLink to='/dogs'>Dogs</NavLink></li>
    //         <li><NavLink to='/tokyo'>Tokyo</NavLink></li>
    //         <li><NavLink to='/search'>Search</NavLink></li>
    //     </ul>
    // </nav>

    <div className="container">
      <div className="row">
        <div className="col-lg">
          <a className="nav-link" href="#">About</a>
        </div>
        <div className="col-lg">
          <a className="nav-link" href="#">Schedule</a>
        </div>
        <div className="col-lg">
          <a className="nav-link" href="#">Social</a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <a className="nav-link" href="#">Contact</a>
        </div>
        <div className="col-lg">
          <a className="nav-link" href="#">FAQ</a>
        </div>
        <div className="col-lg">
          <a className="nav-link" href="#">Login</a>
        </div>
      </div>
    </div>
);

export default Footer;
