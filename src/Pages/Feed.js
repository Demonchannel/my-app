import React from "react";
import styled from "styled-components";
import dragon from "../Assets/dragon.png"
import Kamina from "../Assets/Kamina.jpg"
import SvgLike from "../Assets/Union (2).svg"
import SvgShare from "../Assets/Share.svg"
import SvgOrg from "../Assets/TextFrame (1).svg"
import Svg1 from "../Assets/Svg1.svg"
import Svg2 from "../Assets/Svg2.svg"
import Svg3 from "../Assets/Svg3.svg"

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-left: 20px;
gap: 20px;
background: #FFFFFF;
border-radius: 10px;
`
const Info = styled.div`
display:flex;
flex-direction: column;
margin-bottom:13px;
margin-top: 27px;
`
const InfoBase =styled.div`
display:flex;
flex-direction: column;
margin-bottom:13px;
`
const Base = styled.div`
width: 820px;
`
const Img = styled.img`
width: 100%;    
height: 272px;
background: url(.jpg);
border-radius: 8px;
margin-left: 20px;
`
const Post = styled.div`
`
const Comments = styled.div`
margin:20px;
`
const TextDiv1 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
margin: 20px;
line-height: 16px;`
const TextDiv2 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
margin-top: 20px;
margin-bottom: 20px;
line-height: 16px;`
const BaseInfo = styled.div`
`
const H1 = styled.h1`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #29374E;
margin-left: 20px;
`
const P = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #42577D;
margin-left: 20px;
`
const UrComment = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const UsrsComments = styled.div`
display: flex;
flex-direction: column;
`
const CommentsUsrs = styled.div`
`
const ImgUser = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 15px;
`
const InputComment = styled.input`
padding: 8px 12px;
gap: 10px;
width: 607px;
height: 40px;
background: #F5F7FA;
border-radius: 8px;
margin-right: 10px;
`
const Button = styled.button`
width: 108px;
height: 40px;
background: #637DAC;
border-radius: 8px;
color: white;
`
const HR = styled.hr`
border: none;
color: #E5E9F1;
width: 1px;
height: 100%;
margin-top: 20px;
margin-left: 20px;
background-color: #E5E9F1;
`

const Person = styled.div`
display: flex;
flex-direction: row;
`
const PersImg = styled.img`
width: 45px;
height: 45px;
border-radius: 8px;
`
const PersInfo = styled.div`
margin-left: 10px;
`
const NickName = styled.div`
`
const PlusInfo = styled.div`
margin-top: 5px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 12px;
color: #9098A7;
`
const DivInfo = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 14px;
`
const Buttons = styled.div`
display: flex;
flex-direction: row;
`
const Like = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 20px;
gap: 10px;
width: 244px;
height: 36px;
border: 1px solid #9098A7;
border-radius: 8px;
`
const Share = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 10px;
width: 36px;
height: 36px;
border: 1px solid #9098A7;
border-radius: 8px;
margin-left: 10px;
margin-right: 20px;
`
const Div = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #9098A7;
`
const Item = styled.div`
margin-left: 15px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #9098A7;`
const Feed = () =>{
    return(
       <Container>
<Base>
<Post>
<TextDiv1>Explore/Companies</TextDiv1>
<Img src={dragon} alt="Sheeesh"></Img>
<BaseInfo>
<H1>«Это именно то, что нам нужно». Реакция сообщества на анонс аниме по Dota 2</H1>
<P>Сегодня Netflix в сотрудничестве с Valve представила анимационный сериал «DOTA: Кровь Дракона» по вселенной Dota 2, премьера которого состоится в следующем месяце. Главными героями аниме станут Dragon Knight Dragon Knight и Mirana Mirana. Как на этот анонс отреагировало комьюнити Dota 2 – разбираемся в нашей новости!</P>
</BaseInfo>
</Post>
<Comments>
    <UrComment>
        <ImgUser src={Kamina} alt="sheeesh"></ImgUser>
        <InputComment placeholder="Type a comment"></InputComment>
        <Button>Comment</Button>
    </UrComment>
    <UsrsComments></UsrsComments>
</Comments>
</Base>
<HR></HR>
<InfoBase>
<TextDiv2>Organisers</TextDiv2>
<Person>
    <PersImg src={SvgOrg}></PersImg>
    <PersInfo>
        <NickName>Easy Photography Tutorial for ...</NickName>
        <PlusInfo>by Arlene McCoy </PlusInfo>
    </PersInfo>
</Person>
<Info>
    <DivInfo>
    <img src={Svg1} alt="Sheesh"></img>
    <Item>Companies</Item> 
    </DivInfo>
    <DivInfo>
    <img src={Svg2} alt="Sheesh"></img>
    <Item>Sunday, 15 August 2021</Item> 
    </DivInfo>
    <DivInfo>
    <img src={Svg3} alt="Sheesh"></img>
    <Item>Sylhet, Bangladesh</Item> 
    </DivInfo>
</Info>
<Buttons>
    <Like>
        <img src = {SvgLike} alt='shesh'></img>
        <Div>Interested</Div>
    </Like>
    <Share>
        <img src={SvgShare} alt='Sheesh'></img>
    </Share>
</Buttons>
</InfoBase>
       </Container> 
    )
}
export default Feed