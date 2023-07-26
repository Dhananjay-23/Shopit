import React, { useState } from "react";
import Shirtdata from "./Prods/Shirtdata"
import Card from "./Prods/Cards"

function Sidebar({inp, changeInc , changeDec, setFil,handleColorChange,setCol})
{
    const handleApplyClick= ()=>{
        setFil(true)
    }
    const handleClearClick= ()=>{
        setFil(false)
        setCol(false)
    }
    const handleColorClick=()=>{
        setCol(true);
    }
    return(
        <div className="side">
        <div>
                <button className="clear" onClick={handleClearClick}>Clear All Filters</button>
            </div>
        <div>
        <p className="sideTitle">
            Filter by Price
        </p>
        
        <p>Max product price:</p>
            <button className="sideb" onClick={changeDec}>-</button>
            <p className="cont">{inp}</p>
            <button className="sideb" onClick={changeInc}>+</button>
            </div>
            <div>
                <button className="tot" onClick={handleApplyClick}>Apply</button>
            </div>
            <div>
            <p className="sideTitle">
            Filter by Colors
            </p>
            <div className="filCol"><input type='checkbox' value='black' onChange={handleColorChange}/>
            <p>Black</p>
            </div>
            <div className="filCol"><input type='checkbox' value='white' onChange={handleColorChange}/>
            <p>White</p>
            </div>
            <div className="filCol"><input type='checkbox' value='yellow' onChange={handleColorChange}/>
            <p>Yellow</p>
            </div>
            <div className="filCol"><input type='checkbox' value='blue' onChange={handleColorChange}/>
            <p>Blue</p>
            </div>
            <div className="filCol"><input type='checkbox' value='multi' onChange={handleColorChange}/>
            <p>Multi</p>
            </div>
            
            </div>
            <div>
                <button className="tot" onClick={handleColorClick}>Apply</button>
            </div>
            
        </div>
    );
}

export default Sidebar;


//     const [inp,setInput]=useState(5000)

//     function changeInc(){
//         setInput((previnp) => previnp+1000);
//     }
//     function changeDec(){
//         setInput((previnp) => previnp-1000);
//     }
//     const filteredItems=Shirtdata.filter((Shirtdata) => Shirtdata.price<{inp});
//     function filteredData(Shirtdata,inp)
//     {
//     let filteredProducts= Shirtdata

//     if(Shirtdata.price<{inp}){
//         filteredProducts= filteredItems
//     }
//     return filteredProducts.map(({name,img,price})=> (
//         <Card 
//         name={name}
//         img={img}
//         price={price}
//         />
//     )
//     );
// }