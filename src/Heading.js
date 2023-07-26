import React, { useState } from "react";
import {FaShoppingCart} from "react-icons/fa"
import Marquee from "react-fast-marquee";
import logo from "./shopit.png"
import {BiSolidSearch} from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import {VscAccount} from "react-icons/vsc"

function Heading({num,setShow})
{
    const navigate= useNavigate();
    return (<React.Fragment>
    <div className="marq">
    <Marquee>SALE 70% OFF!! SHOP NOW </Marquee>
    </div>
    <div id="brandname">
    <img src={logo} alt="logo"></img>
            <h1 onClick={()=> setShow(true)}>SHOPIT</h1>
            <div className="carty">
            <p className="mag" onClick={()=>navigate("/explore")}><BiSolidSearch /></p>
            <p className="logo" onClick={() => setShow(false)}><FaShoppingCart /></p>
            <p className="num">{num}</p>
            <p className="mag" onClick={()=>navigate("/login")}><VscAccount /></p>
            </div>
            </div>
            </React.Fragment>);
}
export default Heading;