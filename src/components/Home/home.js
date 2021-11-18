import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';


function Home() {

  const [standings, setStandings] = useState("");
  const [points, setPoints] = useState("");

  const [qualiFirst, setQualiFirst] = useState("");
  const [qualiSecond, setQualiSecond] = useState("");
  const [qualiThird, setQualiThird] = useState("");


  const [season, setSeason] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");

  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/last/results.json")
    .then((res) => {
        // setLastRaceResult(res.data);
        let colocacoes = []
        let pontos = []
        setSeason(res.data.MRData.RaceTable.season);
        setPlace(res.data.MRData.RaceTable.Races[0].Circuit.Location.country+", "+ res.data.MRData.RaceTable.Races[0].Circuit.circuitName);
        setCity(res.data.MRData.RaceTable.Races[0].raceName)
        for (let i = 0; i < res.data.MRData.RaceTable.Races[0].Results.length ; i++ ){
          colocacoes.push(res.data.MRData.RaceTable.Races[0].Results[i].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[i].Driver.familyName);
          pontos.push(res.data.MRData.RaceTable.Races[0].Results[i].points);
        }

        setStandings(colocacoes);
        setPoints(pontos);
        console.log("ESSE É O RES.DATA: ", res.data.MRData.RaceTable.Races[0]);
        console.log("OLHA AI: ", colocacoes)
    });
    axios
    .get("http://ergast.com/api/f1/current/last/qualifying.json")
    .then((response) => {
      setQualiFirst(response.data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.givenName+ " "+response.data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.familyName);
      setQualiSecond(response.data.MRData.RaceTable.Races[0].QualifyingResults[1].Driver.givenName+ " "+response.data.MRData.RaceTable.Races[0].QualifyingResults[1].Driver.familyName);
      setQualiThird(response.data.MRData.RaceTable.Races[0].QualifyingResults[2].Driver.givenName+ " "+response.data.MRData.RaceTable.Races[0].QualifyingResults[2].Driver.familyName);
      console.log("QUALI: ", response.data.MRData );
    });
  }


  useEffect(() => {
      loadData();
  }, []);




  return (
    <main>
      <h3 className="lastRace"> {place}</h3>
      <h4 className="year"> {season} </h4>
      <h5 className="city"> {city} </h5>  
      
      <div className="row">
        <div className="columns">
            {standings.map((position) => (
              <p>{position}</p>
                ))}
        </div>

        <div className="columns">
            {points.map((point) => (
              <p>{point}</p>
                ))}
        </div>
      </div>


      Quali: <br/>
      Primeiro mais rápido quali: {qualiFirst} <br/>
      Segundo mais rápido quali: {qualiSecond} <br/>
      Terceiro mais rápido quali: {qualiThird} <br/>
    </main>
  );
}

export default Home;
