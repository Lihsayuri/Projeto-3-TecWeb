import { useEffect, useState } from "react";
import axios from "axios";
import './driverStandings.css'
const { JSDOM } = require("jsdom")

function DriverStandings() {

  const [positions, setPositions] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [car, setCar] = useState([]);
  const [points, setPoints] = useState([]);
  const [firstPlaceSrc, setFirstPlaceSrc] = useState("")


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

  const f1Images = async () => {
    try {
      const { data } = await axios.get(`https://www.formula1.com/en.html`);
      const dom = new JSDOM(data, {
        runScripts: "outside-only",
        resources: "usable"
      });
      const { document } = dom.window;
      const firstPlace = document.querySelector('.f1-podium--position.pos--1.d-none.d-md-inline-block')
      const driverClass = firstPlace.querySelector('.driver-image')
      const pictureFirstPlace = driverClass.querySelector('.lazy').getAttribute('data-src')
  
      console.log('https://www.formula1.com' + pictureFirstPlace)
      return 'https://www.formula1.com'+ pictureFirstPlace
  
    } catch (error) {
      throw error;
    }
  };
  

  useEffect(() => {
      loadData();
  }, []);

  return (
    <>
      {/* <p>{firstPlaceSrc}</p> */}
      <div className="tableDriverStandings">
        <div className="row">
          <div className="columnsDriverStandings">
            {positions.map((position) => (
              <p className="fonte">{position}</p>
                ))}
          </div>
          <div className="columnsDriverStandings">
            {drivers.map((driver) => (
              <p className="fonte">{driver}</p>
                ))}
          </div> 
          <div className="columnsDriverStandings">
            {nationalities.map((nationality) => (
              <p className="fonte">{nationality}</p>
                ))}
          </div>
          <div className="columnsDriverStandings">
            {car.map((car) => (
              <p className="fonte">{car}</p>
                ))} 
          </div>
          <div className="columnsDriverStandings">
            {points.map((point) => (
              <p className="fonte">{point}</p>
                ))}
          </div>
        </div>
    </div>
  </>
  );
}

export default DriverStandings;
