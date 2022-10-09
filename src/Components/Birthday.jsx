import React from "react";
import styled from "styled-components";
import s from "../Styles/Birthday.module.css"
import posterAvatar from "../Assets/PosterAvatar.svg"

const Container = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 239px;
height: 256px;
background: #FFFFFF;
border-radius: 10px;
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 199px;
`
const PersonInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #29374E;
`
const Name = styled.div``
const SeeAll = styled.div``
const Person = styled.div`
 display:flex;
    flex-direction:row;
    width: 100%;
    align-items: center;
`
const Img = styled.img`
width: 50px;
height: 50px;
`
const HR = styled.hr`
border: none;
color: #E5E9F1;
width: 100%;
height: 1px;
margin-top: 20px;
/* margin-left: 20px; */
background-color: #E5E9F1;
`
const Timeline = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 12px;
color: #9098A7;`
const TypeHim = styled.div``
const UpComBirth = styled.div``

const Birthday = () =>{
    return(
        <Container>
             <Title>
                <Name>Birthday</Name>
                <SeeAll>See All</SeeAll>
            </Title>
            <HR></HR>
            <Person>
                <Img src={posterAvatar}></Img>
                <PersonInfo>Radovan Skill...<Timeline>Founder & CEO Trophy</Timeline></PersonInfo>
            </Person>
            <TypeHim></TypeHim>
            <HR></HR>
            <UpComBirth></UpComBirth>
        </Container>
        )
}

export default Birthday