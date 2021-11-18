import logo from './logo.svg';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import PlaySound from './components/PlaySound/playsound';
import Home from './components/Home/home';
import DriverStandings from './components/DriverStandings/driverStandings';
import Menu from './components/Menu/menu';
import './App.css';

// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  return (
    <Router>
      <main>
        <div className="header">
          <img src="/f1_logo.png" className=".f1Logo" />
          <Menu />
        </div>
              <Routes>
                <Route path='/driver_standings' element={<DriverStandings />} />
                <Route path='/' exact element={<Home />} />
              </Routes>
        <PlaySound />
      </main>
    </Router>

  );
}

export default App;
