import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { IconContext } from 'react-icons';

function Menu() {
  
  return (
    <>
        <Link to="/">
            Home
        </Link>
        <Link to="/driver_standings">
            Driver standings
        </Link>
    </>
  );
}

export default Menu;