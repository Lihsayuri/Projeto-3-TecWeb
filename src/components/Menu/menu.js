import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
// import { IconContext } from 'react-icons';

function Menu() {
  
  return (
    <div className="header">
      <img src="/f1_logo.png" className="f1Logo" />
      <div className="links-box">
        <Link className="link" to="/">
            Home
        </Link>
        <Link className="link" to="/driver-standings">
            Driver standings
        </Link>
        <Link className="link" to="/constructor-standings">
            Team standings
        </Link> 
      </div>
      
    </div>
  );
}

export default Menu;