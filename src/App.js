import logo from './logo.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';


// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");
  const [season, setSeason] = useState("")
  const [place, setPlace] = useState("")

  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/last/results.json")
    .then((res) => {
        // setLastRaceResult(res.data);
        setSeason(res.data.MRData.RaceTable.season)
        setPlace(res.data.MRData.RaceTable.Races[0].Circuit.Location.country+", "+ res.data.MRData.RaceTable.Races[0].Circuit.circuitName)
        setFirstPlace(res.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName)
        setSecondPlace(res.data.MRData.RaceTable.Races[0].Results[1].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName)
        setThirdPlace(res.data.MRData.RaceTable.Races[0].Results[2].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[2].Driver.familyName)

        console.log("ESSE É O RES.DATA: ", res.data.MRData.RaceTable.Races[0]);

    });
  }

  useEffect(() => {
      loadData();
  }, []);




  return (
    <main>
      <div className="header">
        <img src="/f1_logo.png" className=".f1Logo" />
      </div>

      <h3 className="lastRace"> {place}</h3>
      <h4 className="year"> {season} </h4>
      Primeiro colocado: {firstPlace} <br/>
      Segundo colocado: {secondPlace} <br/>
      Terceiro colocado: {thirdPlace} <br/>

    </main>
  );
}

export default App;
