import React from 'react';
import MainComponent from "../components/MainComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <MainComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;