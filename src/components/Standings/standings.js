import { useEffect, useState } from "react";
import axios from "axios";
import './standings.css'

function Standings() {

  const [positions, setPositions] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [car, setCar] = useState([]);
  const [points, setPoints] = useState([]);


  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/driverStandings.json")
    .then((res) => {
      let posicoes = [];
      let pilotos = [];
      let nacionalidades = [];
      let carros = [];
      let pontos = [];
        for (let i = 0; i < res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length ; i++ ){
          posicoes.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position);
          pilotos.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName + " "+res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName);
          nacionalidades.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality);
          carros.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name);
          pontos.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points)
        }

        setPositions(posicoes);
        setDrivers(pilotos);
        setNationalities(nacionalidades);
        setCar(carros);
        setPoints(pontos)

      console.log("ESSE É O RES.DATA: ", res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
      console.log(posicoes);
      console.log(pilotos);
      console.log(nacionalidades);
      console.log(carros);
      console.log(pontos);
    });
  }


  useEffect(() => {
      loadData();
  }, []);

  return (
    <body className="body">
      <div className="row">
        <div className="columns">
          {positions.map((position) => (
            <p>{position}</p>
              ))}
        </div>
        <div className="columns">
          {drivers.map((driver) => (
            <p >{driver}</p>
              ))}
        </div> 
        <div className="columns">
          {nationalities.map((nationality) => (
            <p >{nationality}</p>
              ))}
        </div>
        <div className="columns">
          {car.map((car) => (
            <p >{car}</p>
              ))} 
        </div>
        <div className="columns">
          {points.map((point) => (
            <p >{point}</p>
              ))}
        </div>
      </div>
  </body>
  );
}

export default Standings;
