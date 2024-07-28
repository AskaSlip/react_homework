import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/headerComponent/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <hr/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;