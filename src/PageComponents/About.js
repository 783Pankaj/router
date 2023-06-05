import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../HeaderComponent/HeaderNav";
const About = () =>{

    const navigate = useNavigate();
    const goToHome=()=>{
        navigate("/")
    }
    return(
        <>
          <HeaderNav />
            <section className="sec-text" >
                <h1>About Page</h1>
                <button onClick={()=>goToHome()}>Go To Home Page</button>

                {/* for one step back */}
                <br />  <br />
                <button onClick={()=>{navigate(-1)}}>Back</button>
            </section>
        </>
    );
}
export default About;