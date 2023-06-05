import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirected=(props)=>{
    const {Component} = props;
    const naviagate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            naviagate('/login')
        }
    });
    return(
        <div>
           <Component />
        </div>
    );
}
export default Redirected;