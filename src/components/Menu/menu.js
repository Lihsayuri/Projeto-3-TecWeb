import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
// import { IconContext } from 'react-icons';

function Menu() {
  const [teamDiv, setTeamDiv] = useState();
  useEffect(()=>{
    setTeamDiv(document.getElementById("teams-links"))
    
  }, [])
  
  function showTeams(){
    teamDiv.style.display="flex";
  }
  function hideTeams(){
    teamDiv.style.display="none";
  }
  return (
    <div className="menu-holder">
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
          <button id="a" className="teams-button" onMouseOver={showTeams}>
            Teams
          </button>
        </div>
      </div>
        
      <div id="teams-links" className="teams-div" onMouseLeave={hideTeams}>
        <Link className="teams-link" to=''>
          Alfa Romeo
        </Link>
        <Link className="teams-link" to=''>
          alphaTauri
        </Link>
        <Link className="teams-link" to=''>
          Alpine
        </Link>
        <Link className="teams-link" to=''>
          Aston Martin
        </Link>
        <Link className="teams-link" to=''>
          Ferrari
        </Link>
        <Link className="teams-link" to=''>
          Haas
        </Link>
        <Link className="teams-link" to=''>
          McLaren
        </Link>
        <Link className="teams-link" to=''>
          Mercedes
        </Link>
        <Link className="teams-link" to=''>
          Red Bull
        </Link>
        <Link className="teams-link" to=''>
          Williams
        </Link>
      </div>
    </div>
  );
}

export default Menu;