import React from "react";
import styled from "styled-components";
import s from "../Styles/Events.module.css"

const Container = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px 20px;
gap: 20px;
width: 239px;
height: 276px;
background: #FFFFFF;
border-radius: 10px;
margin-top: 20px;
margin-bottom: 20px;
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
const Event = styled.div`
    
`
const Img = styled.img`
    
`
const Info = styled.div``
const Seen = styled.div``
const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
    width: 199px;
`
const TitleEvent = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: #29374E;
`

const Events = () =>{
    return ( 
        <Container>
             <Title>
                <TitleEvent>Recent Event</TitleEvent>
             </Title>
            <HR></HR>
            <Event>
                <Img></Img>
                <Info></Info>
                <Seen></Seen>
            </Event>
            <HR></HR>
            <Event></Event>
        </Container>
        )
}
export default Events