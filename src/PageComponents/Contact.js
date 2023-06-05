import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderNav from "../HeaderComponent/HeaderNav";
const Contact = () =>{

    const navigate = useNavigate()
    const gotoHome=()=>{
        navigate("/")
    }

    const back=()=>{
        navigate(-1)
    }

    const [searchParams, setSearchParams] = useSearchParams(); //its filter the api data
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    console.log(age,city)
    return(
       <>   
            <HeaderNav />
            <section className="sec-text">
                <h1>Contact Page</h1>
                <h2>My Age is: {age}</h2>
                <h2>My city is: {city}</h2>
                <button onClick={()=>gotoHome()}>Go to Home Page </button>
                <br /> <br />
                <button onClick={()=>back()}>Back</button>
            </section>
        </>    
    );
}
export default Contact;