import React from "react";
import { useNavigate } from "react-router-dom";
const Wrong =() =>{
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate('/');
    }
    return(
        <>
            <h1>Error 404</h1>
            <button onClick={()=>goToHome()}>Go to home page</button>
        </>
    );
}
export default Wrong;