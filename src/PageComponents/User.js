import React from "react";

import { useLocation, useNavigate, useParams} from "react-router-dom";
import HeaderNav from "../HeaderComponent/HeaderNav";
const User = () => {
    const { fname } = useParams();
    // console.log(name);
    const location = useLocation();
    // console.log(location)
    const navigatess = useNavigate();
    // const goBackToHome = () => {
        // navigatess('/');
        // navigatess('/contact', { replace: true });
    // }
    // console.log(navigatess);
    return (
        <div>
            <HeaderNav />
            <h1>User {fname} Page</h1>
            <h2>location is : {location.pathname}</h2>

            {location.pathname === "/user/pankaj" ? (
                <button onClick={(()=>navigatess('/') )}>GoBackToHome</button>
            ) : null }
        </div>
    );
}
export default User;