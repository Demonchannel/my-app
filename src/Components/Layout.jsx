import React from "react";
import Explore from "../Pages/Explore";
import s from "../Styles/Layout.module.css"
import { Link, Outlet } from 'react-router-dom'
import Header from "./Header";
import Menu from "./Menu";

const Layout = () =>{
    return( 
        <div>
        <div><Header/></div>
        <div><Menu/></div>
        <main className="">
        <Outlet/>
</main>
    </div>
    )
}
export default Layout