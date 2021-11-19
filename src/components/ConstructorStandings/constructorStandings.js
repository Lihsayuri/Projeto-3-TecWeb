import { useEffect, useState } from "react";
import axios from "axios";
import './constructorStandings.css'

function ConstructorStandings() {

    const [positions, setPositions] = useState([]);
    const [construtors, setconstrutors] = useState([]);
    const [points, setPoints] = useState([]);
    const [wins, setWins] = useState([]);
    const [nationalities, setNationalities] = useState([]);
  
    const loadData = () => {
      axios
      .get("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => {
        let vitorias = []
        let posicoes = [];
        let construtores = [];
        let pontos = [];
        let nacionalidades = [];
          for (let i = 0; i < res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length ; i++){
            posicoes.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position);
            construtores.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name);
            pontos.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points)
            vitorias.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].wins)
            nacionalidades.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.nationality)
          }
  
          setPositions(posicoes);
          setconstrutors(construtores);
          setWins(vitorias);
          setPoints(pontos);
          setNationalities(nacionalidades);
  
        console.log("ESSE É O RES.DATA: ", res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]);
        console.log(posicoes);
        console.log(construtores);
        console.log(pontos);
      });
    }
  
  
    useEffect(() => {
        loadData();
    }, []);
  
    return (
      <div className="tableConstrucStandings">
        <div className="row">
          <div className="columnsConstructor">
            {positions.map((position) => (
              <p>{position}</p>
                ))}
          </div>
          <div className="columnsConstructor">
            {construtors.map((construtor) => (
              <p >{construtor}</p>
                ))}
          </div> 
          <div className="columnsConstructor">
            {nationalities.map((nationality) => (
              <p >{nationality}</p>
                ))}
          </div> 
          <div className="columnsConstructor">
            {wins.map((win) => (
              <p >{win}</p>
                ))}
          </div> 

          <div className="columnsConstructor">
            {points.map((point) => (
              <p >{point}</p>
                ))}
          </div>
        </div>
    </div>
    );
  }
  
  export default ConstructorStandings;