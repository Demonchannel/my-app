import React from "react";
import { Link, NavLink } from "react-router-dom";
// import feedSvg from "../Assets/Substract.jpg";
import MyCommunitySvg from "../Assets/MyCommunity.svg"
import MessagesSvg from "../Assets/Messages.svg"
import NotificationSvg from "../Assets/Notification.svg"
import ExploreSvg from "../Assets/Explore.svg"
import ProfileSvg from "../Assets/Profile.svg"
import SettingsSvg from "../Assets/Settings.svg"
import LogoutSvg from "../Assets/Logout.svg"
import FeedSvg from "../Assets/Vector 161 (Stroke) (2).svg"
import styled from "styled-components"; 
import Feed from "../Pages/Feed.js"

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Nav = styled.nav `
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
    width: 220px;
    height: 442px;
    margin-left: 15px;
    margin-right: 40px;
    `;
const Div= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background-color: ${props => props.setActive ? "#42577D" : "#FFFFFF"};
`;
const Text = styled(Link)`
    width: 166px;
    height: 16px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color:  ${props => props.setActive ? "#FFFFFF" :"#42577D" };
    text-decoration: none;
    
`;


const Menu = () =>{
    return( 
        <Nav>
                    <Div>
                        <img src={FeedSvg} alt='' />
                        <Text to="/feed">
                            Feed
                            </Text>
                    </Div>
                    <Div>
                        <img src={MyCommunitySvg} alt=''/>
                        <Text>
                            My community
                            </Text>
                    </Div>
                    <Div>
                        <img src={MessagesSvg} alt=''/>
                        <Text>
                            Messages
                            </Text>
                    </Div>
                    <Div>
                        <img src={NotificationSvg} alt=''/>
                        <Text>
                            Notification
                            </Text>
                    </Div>
                    <Div>
                        <img src={ExploreSvg} alt=''/>
                        <Text to="/explore">
                            Explore
                            </Text>
                    </Div>
                    <Div>
                        <img src={ProfileSvg} alt=''/>
                        <Text>
                            Profile
                            </Text>
                    </Div>
                    <Div>
                        <img src={SettingsSvg} alt=''/>
                        <Text>
                            Settings
                            </Text>
                    </Div>
                    <Div>
                        <img src={LogoutSvg} alt=''/>
                        <Text>
                            Logout
                            </Text>
                    </Div>
        </Nav>
    )}

export default Menu