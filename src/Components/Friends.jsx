import React from "react";
import styled from "styled-components";
import s from "../Styles/Friends.module.css"
import searchIcon from "../Assets/Search.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    isolation: isolate;
    width: 330px;
    height: 975px;
    background: #FFFFFF;
    margin-left: 31px;
`
const Search = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    gap: 10px;
    width: 290px;
    height: 40px;
    border: 1px solid #E5E9F1;
    border-radius: 8px;
`
const InputSearch = styled.input`
    `
const Slider = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 290px;
height: 77px;`
const List = styled.div``
const H1 = styled.div``
const Users = styled.div``
const User = styled.div``
const Img = styled.img`
height:52px;
width:52px;
border-radius:50%;
`
const Info = styled.div``
const Online = styled.div``
const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border:0;
`

const Friends = () =>{
    return ( 
        <Container>
            <Search>
               
                <SearchIcon src={searchIcon} alt=""/>
                <InputSearch placeholder="Search Friends!">
                </InputSearch>
            </Search>
            <Slider>
                
            </Slider>
            <List>
                <H1>Friends!</H1>
                <Users>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>
                    <User>
                        <Img></Img>
                        <Info></Info>
                        <Online></Online>
                    </User>

                </Users>
            </List>
        </Container>
    )
}
export default Friends