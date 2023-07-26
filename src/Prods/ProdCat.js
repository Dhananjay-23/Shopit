import React from "react";
import sale from "./sale.png"
import img1 from "./simple.png"
import puma from "./puma.png"
import { useNavigate } from "react-router-dom";

  function ProdCat({setNext}) {
    const navigate= useNavigate();
    return (
        <div classname="landingPage">
        <div className="sale">
          <img src={sale}></img>
          <button className="shop" onClick={()=>navigate("/explore")}>SHOP NOW </button>
        </div>
        <div className="sale" >
          <img src={puma}></img>
        </div>
        <div className="sale">
            <img src={img1} />
            <button className="check" onClick={()=>navigate("/explore")}>Check Out</button>
          </div>
        </div>
    );
  }


  export default ProdCat;