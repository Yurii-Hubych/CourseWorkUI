import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "./Layout.css"

import React from "react";

const Layout = () => {
    return (
        <main className="main">
            <div className="plane"></div>
            <div className="clouds"></div>
            <div className="z-index">
                <Header/>
                <Outlet/>
            </div>
        </main>
    )
}

export default Layout