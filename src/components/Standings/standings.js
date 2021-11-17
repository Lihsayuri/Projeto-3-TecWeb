import { useEffect, useState } from "react";
import axios from "axios";


function Standings() {

  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");


  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/driverStandings.json")
    .then((res) => {
        // setLastRaceResult(res.data);

      console.log("ESSE É O RES.DATA: ", res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    });
  }


  useEffect(() => {
      loadData();
  }, []);

  return (
    <>
      <p>OI</p>
    </>
  );
}

export default Standings;
