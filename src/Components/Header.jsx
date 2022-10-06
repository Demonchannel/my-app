import React from "react";
import s from "../Styles/Header.module.css"
import Search from "./Search";


const Header = () =>{
    return <header className={s}>
        <div className={s.logo}><img className={s.logo} src="../Assets/Subtract.jpg" alt=""/><a className={s.header}>Meetmax</a></div>
        {/* <Search/> */}
        <div className={s.userProfile}><a className={s.header}>Kamina Dzikha</a><img src="../Assets/Kamina.jpg" className={s.headerUser} alt=""/></div>
    </header>
}

export default Header

