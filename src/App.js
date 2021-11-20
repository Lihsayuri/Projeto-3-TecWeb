import logo from './logo.svg';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import PlaySound from './components/PlaySound/playsound';
import Home from './components/Home/home';
import DriverStandings from './components/DriverStandings/driverStandings';
import ConstructorStandings from './components/ConstructorStandings/constructorStandings';
import Menu from './components/Menu/menu';
import './App.css';

// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  return (
    <Router>
      <main>
        <Menu />
        <Routes>
          <Route path='/' exact element={<Home />} />                
          <Route path='/driver-standings' element={<DriverStandings/>} />
          <Route path='/constructor-standings' element={<ConstructorStandings/>} />
        </Routes>
        <PlaySound />
      </main>
    </Router>

  );
}

export default App;
