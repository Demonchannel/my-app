import React from "react";
import styled from "styled-components";
import s from "../Styles/NewPost.module.css"
import Kamina from "../Assets/Kamina.jpg"
import Photo from "../Assets/photo.svg"
import Video from "../Assets/video.svg"
import Smile from "../Assets/smile.svg"

const Div = styled.div`
display: flex;
flex-direction: row;
`
const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:470px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 20px;
gap: 10px;
width: 490px;
height: 136px;
background: #FFFFFF;
border-radius: 10px;
`
const IMG = styled.img`
border-radius: 50%;
width: 40px;
height: 40px;
`
const Input = styled.input`
margin-left: 15px;
width: 410px;
height: 40px;
background: #F5F7FA;
border-radius: 8px;
`
const Additions = styled.div`
display: flex;
flex-direction: row;
`
const Button = styled.button`
width: 70px;
height: 36px;
background: #637DAC;
border-radius: 8px;
color: white;
`
const Icons = styled.img`
    
`
const P = styled.p`
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #9098A7;
margin-left: 10px;
`

const NewPost = () =>{
    return( 
        <Container>
        <Div>
            <IMG src={Kamina}></IMG>
            <Input placeholder="What's happened?"></Input>
        </Div>
        <DivButtons>
        <Additions><Icons src={Video}></Icons><P>Live video</P></Additions>
        <Additions><Icons src={Photo}></Icons><P>Photo/images</P></Additions>
        <Additions><Icons src={Smile}></Icons><P>Feeling</P></Additions>
        <Button>Post</Button>
        </DivButtons>
        </Container>
    )
}
export default NewPost