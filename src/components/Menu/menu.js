import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
// import { IconContext } from 'react-icons';

function Menu() {
  
  return (
    <div className="header">
      <img src="/f1_logo.png" className=".f1Logo" />
      <Link to="/">
            Home
      </Link>
      <Link to="/driver-standings">
          Driver standings
      </Link>
      <Link to="/constructor-standings">
          Team standings
      </Link>
    </div>
  );
}

export default Menu;