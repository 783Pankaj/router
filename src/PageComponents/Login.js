import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
   const loginPage=()=>{
    localStorage.setItem('login',true)
    naviagate('/')
   }
   const naviagate = useNavigate();
   useEffect(()=>{
       let login = localStorage.getItem('login');
       if(login){
           naviagate('/')
       }
   });
    return(
        <div> 
            <center>
            <h2>Login Page</h2><br />
             <input type="text" placeholder="Enter Your ID"/><br /><br />
             <input type="password" placeholder="Enter the password" /><br /> <br />
             <button onClick={loginPage}>Login</button>
            </center>
        </div>
    );
}
export default Login;