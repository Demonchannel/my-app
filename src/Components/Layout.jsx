import React from 'react'
import Explore from '../Pages/Explore'
import s from '../Styles/Layout.module.css'
import { Link, Outlet } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components'

const Layout = () => {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
      </div>
      <main className=''>
        <Outlet />
      </main>
    </Container>
  )
>>>>>>> 9c104894dd344c5f852d21e27dfeef40e6bb5d3b
}


export default Layout
