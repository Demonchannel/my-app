import React from "react";
import s from "../Styles/Header.module.css"
import Search from "./Search";
import userPhoto from "../Assets/Subtract.jpg";
import styled from "styled-components";
import Kamina from "../Assets/Kamina.jpg"

const HeadDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-right: 15px;
    margin-left: 15px;
    padding: 20px;
    gap: 494px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 20px;
`
const DivLogo = styled.div`
      display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 200px;
    height: 27px;
`;
const ImgLogo = styled.img`
    border-radius: 50%;
    width: 42px;
    height: 42px;
    `;
const AHeader = styled.a`
  font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #29374E;
    `;
const DivUserProf = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 126px;
    height: 42px;
`


const Header = () =>{
    return (
    <HeadDiv>
        <DivLogo><img src={userPhoto} alt=""/><AHeader>Meetmax</AHeader></DivLogo>
        {/* <Search/> */}
        <DivUserProf><AHeader>Kamina Dzikha</AHeader><ImgLogo src={Kamina} alt=""/></DivUserProf>
    </HeadDiv>
    )
}

export default Header

