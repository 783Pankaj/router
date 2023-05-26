import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () =>{

    const navigate = useNavigate()
    const gotoHome=()=>{
        navigate("/")
    }

    const back=()=>{
        navigate(-1)
    }
    return(
       <>
            <section className="sec-text">
                <h1>Contact Page</h1>
                <button onClick={()=>gotoHome()}>Go to Home Page </button>
                <br /> <br />
                <button onClick={()=>back()}>Back</button>
            </section>
        </>    
    );
}
export default Contact;