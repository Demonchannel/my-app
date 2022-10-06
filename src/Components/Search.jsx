import React from "react";
import s from "../Styles/Search.module.css"


const Search = () =>{
    return (
        <div className={s.search}>
        <input type="text" className={s} placeholder="Search"></input>
        <img src="../Assets/Search.svg" className={s.searchIcon} alt=""/>
        </div>
    )
}

export default Search