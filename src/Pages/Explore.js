import React from "react";
import s from "../Styles/Explore.module.css";
import NewPost from "../Components/NewPost";
import Posts from "../Components/Posts";
import NewUsers from "../Components/NewUsers";
import Events from "../Components/Events";
import Birthday from "../Components/Birthday";
import Friends from "../Components/Friends";
import styled from "styled-components";

const ExploreDivPage = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;
`
const PostsDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const OfferDiv = styled.div`
     display: flex;
    flex-direction: column;
    margin-left:30px;
`
function Explore(){
    return (
        <ExploreDivPage>
            <PostsDiv>
            <NewPost/>
            <Posts/>
            </PostsDiv>
            <OfferDiv>
            <NewUsers/>
            <Events/>
            <Birthday/>
            </OfferDiv>
            <Friends></Friends>
        </ExploreDivPage>
        
    )
}

export default Explore