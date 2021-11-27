import { useEffect, useState } from "react";
import axios from "axios";
import './teamPage.css'
import { useParams, useLocation } from 'react-router-dom';

function TeamPage(){
    //window.location.reload();
    const { teamId } = useParams();
    const [isLoading, setLoading] = useState(true);

    const [driver1, setDriver1] = useState();
    const [driver2, setDriver2] = useState();
    const [teamStats, setTeamStats] = useState();
    const [teamLogo, setTeamLogo] = useState();

    const loadData = () => {
        axios
        .get(`http://127.0.0.1:8000/teams/${teamId}`)
        .then((response) => {
            console.log(response.data.drivers.driver0)
            setDriver1(response.data.drivers.driver0)
            setDriver2(response.data.drivers.driver1)
            setTeamStats(response.data.stats)
            setTeamLogo(response.data.teamLogo)
            setLoading(false);
        });
      }

    useEffect(() => {
        setLoading(true)
        loadData();
    }, [teamId]);
  
    // console.log("PRINTANDO AQUI: ",standings)
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return (
        <>
        <img src={teamLogo}></img>
        <h1> {teamId} </h1>
        </>
    )
}

export default TeamPage;


