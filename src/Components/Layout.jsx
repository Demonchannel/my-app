import React from 'react'
import Explore from '../Pages/Explore'
import s from '../Styles/Layout.module.css'
import { Link, Outlet } from 'react-router-dom'
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
}

const Container = styled.div`
  background-color: pink;
`

export default Layout
