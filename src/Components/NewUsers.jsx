import React from "react";
import styled from "styled-components";
import s from "../Styles/NewUsers.module.css"
import posterAvatar from "../Assets/PosterAvatar.svg"

const Container = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px 20px;
gap: 20px;
width: 239px;
height: 188px;
background: #FFFFFF;
border-radius: 10px;
`
const Person = styled.div`
 display:flex;
    flex-direction:row;
    width: 100%;
    align-items: center;
`
const Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const Div = styled.div`
display: flex;
flex-direction: row;
`
const Follow = styled.button`
padding: 8px 20px;
gap: 10px;
width: 97px;
height: 36px;
border: 1px solid #E5E9F1;
border-radius: 8px;
`
const Ignore = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 20px;
gap: 10px;
width: 97px;
height: 36px;
background: #637DAC;
border-radius: 8px;`
const HR = styled.hr`
border: none;
color: #E5E9F1;
width: 1px;
height: 100%;
margin-top: 20px;
/* margin-left: 20px; */
background-color: #E5E9F1;
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
const Timeline = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 12px;
color: #9098A7;`
const Name = styled.div``
const SeeAll = styled.div``

const NewUsers = () =>{
    return (
        <Container>
            <Title>
                <Name>You might like</Name>
                <SeeAll>See All</SeeAll>
            </Title>
            <HR></HR>
            <Person>
                <Img src={posterAvatar}></Img>
                <PersonInfo>Radovan Skill...<Timeline>Founder & CEO Trophy</Timeline></PersonInfo>
            </Person>
            <Div>
            <Follow>Follow</Follow>
            <Ignore>Ignore</Ignore>
            </Div>
        </Container>
        )
}
export default NewUsers