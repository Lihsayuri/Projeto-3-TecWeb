import { useEffect, useState } from "react";
import axios from "axios";
import './teamPage.css'
import { useParams } from 'react-router-dom';

function TeamPage(){
    const { teamId } = useParams();
    console.log("ESSE É O MATCH", teamId)

    // Matched leaf route at location "/teams/Aston-Martin" does not have an
    //  element. This means it will render an <Outlet /> with a null value by default
    //   resulting in an "empty" page
 
    
    return (
        <h1> TESTE </h1>
    )
}

export default TeamPage;


