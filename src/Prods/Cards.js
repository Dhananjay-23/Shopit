import React from "react";
function Card(props)
{
    return(
        
        <div className="prod">
        <img className="prodimg" src={props.img} height="250px" width="200px" />
        <h6> {props.name}</h6>
        <p className="price"> {props.price}</p>
        <br></br><br></br>

        <button className="tot" onClick={()=>props.handleClick(props)}>Add to Cart</button>
        </div>
    );
}

export default Card;