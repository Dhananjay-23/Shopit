import React from "react";
import Shirtdata from "./Shirtdata"
import Card from "./Cards"
// function Card(props)
// {
//     return(
//         <div className="prod">
//         <img src={props.img} height="300px" width="200px" />
//         <h6> {props.name}</h6>
//         <p className="price"> {props.price}</p>
//         </div>
//     );
// }
function createCard(Shirtdata)
{
    return(
        <div>
                <Card 
                    name={Shirtdata.name}
                    img={Shirtdata.img}
                    price={Shirtdata.price}
                />
            </div>
    );
}
function Shirts()
{
    return (
        <div className="flex-container">
        {Shirtdata.map(createCard)}
        </div>
    );

}

export default Shirts;