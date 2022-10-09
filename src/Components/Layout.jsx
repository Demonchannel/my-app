import React from "react";
import Explore from "../Pages/Explore";
import s from "../Styles/Layout.module.css"
import { Link, Outlet } from 'react-router-dom'
import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
`

const Layout = () =>{
    return( 
        <div>
        <div><Header/></div>
        <Container>
        <Menu/>
        <Outlet/>
</Container>
    </div>
    )
}
export default Layout