import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

import React from "react";

const Layout = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
}

export default Layout