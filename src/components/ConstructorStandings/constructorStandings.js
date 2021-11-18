import { useEffect, useState } from "react";
import axios from "axios";
import './constructorStandings.css'

function ConstructorStandings() {

    const [positions, setPositions] = useState([]);
    const [construtors, setconstrutors] = useState([]);
    const [points, setPoints] = useState([]);
  
    const loadData = () => {
      axios
      .get("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => {
        let posicoes = [];
        let construtores = [];
        let pontos = [];
          for (let i = 0; i < res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length ; i++){
            posicoes.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position);
            construtores.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name);
            pontos.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points)
          }
  
          setPositions(posicoes);
          setconstrutors(construtores);
          setPoints(pontos)
  
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
      <body className="body">
        <div className="row">
          <div className="columns">
            {positions.map((position) => (
              <p>{position}</p>
                ))}
          </div>
          <div className="columns">
            {construtors.map((construtor) => (
              <p >{construtor}</p>
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
  
  export default ConstructorStandings;