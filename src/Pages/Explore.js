import React from "react";
import s from "../Styles/Explore.module.css";
import NewPost from "../Components/NewPost";
import Posts from "../Components/Posts";
import NewUsers from "../Components/NewUsers";
import Events from "../Components/Events";
import Birthday from "../Components/Birthday";
import Friends from "../Components/Friends";

function Explore(){
    return (
        <div className={s.explorePage}>
            <div className={s.posts}>
            <div><NewPost/></div>
            <div><Posts/></div>
            </div>
            <div className={s.offering}>
            <div><NewUsers/></div>
            <div><Events/></div>
            <div><Birthday/></div>
            </div>
            <div className={s.friends}><Friends/></div>
        </div>
        
    )
}

export default Explore