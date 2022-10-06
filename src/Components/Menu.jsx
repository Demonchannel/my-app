import React from "react";
import { Link } from "react-router-dom";
import s from "../Styles/Menu.module.css"

// const Nav = styled.nav `
//     background: #FFFFFF;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     gap: 10px;
//     padding: 20px 10px;
//     width: 230px;
//     height: 442px;
//     margin-left: 15px;
//     `;
// const Div = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 10px;
//     gap: 10px;
//     width: 220px;
//     height: 44px;
// `;
// const A = styled.a`
//     width: 166px;
//     height: 16px;
//     font-family: 'Noto Sans';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 16px;
//     color: #42577D;
//     text-decoration: none;
// `;

const Menu = () =>{
    return( 
        // <Nav>
            <nav className={s.navMenu}>
                {/* <Div> */}
                    <div className={s.item}>
                        <img src="../Assets/Feed.svg"/>
                        {/* <A> */}
                            <Link className={s.item}  href="true">Feed</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/MyCommunity.svg"/>
                        {/* <A> */}
                            <Link className={s.item}   href="true">My community</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Messages.svg"/>
                        {/* <A> */}
                            <Link className={s.item}   href="true">Messages</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Notification.svg"/>
                        {/* <A> */}
                            <Link  className={s.item}  href="true">Notification</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Explore.svg"/>
                        {/* <A> */}
                            <Link  className={s.item}  href="true">Explore</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Profile.svg"/>
                        {/* <A> */}
                            <Link  className={s.item}  href="true">Profile</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Settings.svg"/>
                        {/* <A> */}
                            <Link  className={s.item}  href="true">Settings</Link>
                            {/* </A> */}
                    </div>
                    <div className={s.item}>
                        <img src="../Assets/Logout.svg"/>
                        {/* <A> */}
                            <Link  className={s.item}  href="true">Logout</Link>
                            {/* </A> */}
                    </div>
                {/* </Div> */}
            </nav>) 
        {/* </Nav> */}
    }

export default Menu