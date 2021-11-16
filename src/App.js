import logo from './logo.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import PlaySound from './components/PlaySound/playsound';
import Home from './components/Home/home';
import './App.css';

// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  return (
    <main>
      <div className="header">
        <img src="/f1_logo.png" className=".f1Logo" />
      </div>

      <PlaySound />
      <Home />
    </main>
  );
}

export default App;
