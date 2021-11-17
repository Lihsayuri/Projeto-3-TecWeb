import logo from './logo.svg';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import PlaySound from './components/PlaySound/playsound';
import Home from './components/Home/home';
import Standings from './components/Standings/standings';
import Menu from './components/Menu/menu';
import './App.css';

// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  return (
    <main>
      <div className="header">
        <img src="/f1_logo.png" className=".f1Logo" />
        <Router>
            <Menu />
            <Routes>
              <Route path='/standings' element={<Standings />} />
              {/* <Route path='/' exact element={<Home />} /> */}
            </Routes>
        </Router>
      </div>

      <PlaySound />
      <Home />
    </main>
  );
}

export default App;
