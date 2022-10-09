import React from "react";
import s from "../Styles/Posts.module.css"
import styled from "styled-components";
import user from "../Assets/Shok.jpg";
import toshka from "../Assets/tohki.svg"
import postImg from "../Assets/picture.png"
import Svg from "../Assets/Kamina.jpg"
import SvgLike from "../Assets/LikeReact.svg"
import SvgComment from "../Assets/CommentReact.svg"
import SvgShare from "../Assets/ShareReact.svg"
import Kamina from "../Assets/Kamina.jpg"
import AddDate from "../Assets/AddDate.svg"
import CommentButton from "../Assets/CommentButton.svg"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    isolation: isolate;
    width: 490px;
    height: 415px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-top: 20px;
    /* margin-left: 40px */
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const Person = styled.div`
    display:flex;
    flex-direction:row;
    width: 460px;
    justify-content: space-between;
    align-items: center;
    `
const Content = styled.div``
const People = styled.div`
display:flex;
flex-direction: row;`
const Reaction = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 0px;
gap: 244px;
width: 470px;
height: 40px;
border-width: 1px 0px;
border-style: solid;
border-color: #E5E9F1;
`
const Comment = styled.div`
display: flex;
flex-direction: row;
align-items: center;
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
    margin-left: 10px;
    `
const Timeline = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #9098A7;`
const Tochka = styled.img``
const ImgPost = styled.img`
        max-height: 200px;
    width: 470px;
    border-radius: 8px;
    `
const PostInfo = styled.div`
display:flex;
flex-direction: row;
align-items: center;
width: 470px;
justify-content: space-between;
`
const Quantity = styled.div`
display:flex;
flex-direction: row;
`
const QuantityComm = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
color: #9098A7;`
const QuantityShare = styled.div`
margin-left: 25px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
color: #9098A7;`
const ImgP = styled.img`
border: 1px solid #FFFFFF;
width: 26px;
height:26px;
border-radius:50%;
`
const QuantityImg = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 26px;
height: 26px;
background: #608AA1;
border: 1px solid #FFFFFF;
border-radius: 50%;
`
const Comments = styled.div`
display: flex;
flex-direction: row;
`
const Like = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;
`
const Liker = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;
margin-left: 25px;
`
const ImgLike = styled.img`
`
const Share = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
color: #29374E;
`
const ImgPers = styled.img`
width:32px;
height: 32px;
border-radius: 50%;
`
const InputComm = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 12px;
gap: 10px;
width: 381px;
height: 32px;
background: #F5F7FA;
border-radius: 8px;`
const ButtonShare = styled.img`
width: 32px;
height: 32px;
background: #CFE2F4;
border-radius: 8px;`
const Input = styled.input`
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #9098A7;

`

const Posts = () =>{
return( 
    <Container>
<Person>
    <Div>
<Img src={user}></Img>
<PersonInfo>Yagami Light<Timeline>15h. Public</Timeline></PersonInfo>
</Div>
<Tochka src={toshka}></Tochka>
</Person>
<Content>
    <ImgPost src={postImg} alt='sheesh'></ImgPost>
</Content>
<PostInfo>
    <People>
    <ImgP src={Svg}></ImgP>
    <ImgP src={Svg}></ImgP>
    <ImgP src={Svg}></ImgP>
    <QuantityImg>+9</QuantityImg>
    </People>
    <Quantity>
        <QuantityComm>3 Comments</QuantityComm>
        <QuantityShare>17 Share</QuantityShare>
    </Quantity>
</PostInfo>
<Reaction>
<Comments>
    <Like>
        <ImgLike src = {SvgLike}></ImgLike>
        <Share>Like</Share>
    </Like>
    <Liker>
    <ImgLike src = {SvgComment}></ImgLike>
        <Share>Comment</Share>
    </Liker>
        </Comments>
<Like>
<ImgLike src = {SvgShare}></ImgLike>
        <Share>Share</Share>
</Like>
</Reaction>
<Comment>
    <ImgPers src={Kamina}></ImgPers>
    <InputComm>
        <Input type="text" placeholder="Type a comment"></Input>
        <img src={AddDate}alt=""/>
        </InputComm>
    <ButtonShare src={CommentButton}></ButtonShare>
</Comment>
    </Container>
)
}

export default Posts