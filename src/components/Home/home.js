import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';


function Home() {

  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");

  const [qualiFirst, setQualiFirst] = useState("")
  const [qualiSecond, setQualiSecond] = useState("")
  const [qualiThird, setQualiThird] = useState("")


  const [season, setSeason] = useState("")
  const [place, setPlace] = useState("")

  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/last/results.json")
    .then((res) => {
        // setLastRaceResult(res.data);
        setSeason(res.data.MRData.RaceTable.season);
        setPlace(res.data.MRData.RaceTable.Races[0].Circuit.Location.country+", "+ res.data.MRData.RaceTable.Races[0].Circuit.circuitName);
        setFirstPlace(res.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName);
        setSecondPlace(res.data.MRData.RaceTable.Races[0].Results[1].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName);
        setThirdPlace(res.data.MRData.RaceTable.Races[0].Results[2].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[2].Driver.familyName);

        // console.log("ESSE É O RES.DATA: ", res.data.MRData.RaceTable.Races[0]);
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
      Primeiro colocado: {firstPlace} <br/>
      Segundo colocado: {secondPlace} <br/>
      Terceiro colocado: {thirdPlace} <br/>

      Quali: <br/>
      Primeiro mais rápido quali: {qualiFirst} <br/>
      Segundo mais rápido quali: {qualiSecond} <br/>
      Terceiro mais rápido quali: {qualiThird} <br/>
    </main>
  );
}

export default Home;
