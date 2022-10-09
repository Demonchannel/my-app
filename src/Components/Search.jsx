import React from "react";
import styled from "styled-components";
import s from "../Styles/Search.module.css"

const Ssearch = styled.div`
    display: inline-flex;
    /* padding: 8px 12px;
    gap: 10px; */
    width: 510px;
    height: 40px;
    border: 1px solid #E5E9F1;
    border-radius: 8px;
` 
const Input = styled.input`
    /* padding: 8px 12px;
    gap: 10px; */
    width: 510px;
    height: 40px;
    border: 0;
`
// input:focus{
//     outline: none;
// }
const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    /* order: -1; */
    border:0;
`

const Search = () =>{
    return (
        <Ssearch>
        <SearchIcon src="../Assets/Search.svg" className={s.searchIcon} alt=""/>
        <Input type="text" className={s} placeholder="Search"></Input>
        </Ssearch>
    )
}

export default Search