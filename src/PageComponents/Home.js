import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
          <HeaderNav />
        <Outlet />
        </>
    );
   
}

export default Home;