import React, {useState , useEffect} from "react";
import Card from "./Cards";
import Shirtdata from "./Shirtdata"
import Shirts from "./Shirts";
import CartCounter from "../CartCounter";
import Heading from "../Heading";
import App from "../App"
import { BsSearch } from "react-icons/bs"


function Filter({filteredData,query,handleClick,handleInputChange,fil,setFil,inp,filteredIt,selectedColor,filteredColor,col})
{  
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
    <div>
    <div className="search">
    <div>

    </div>
    <div className="searchlogo">
    <BsSearch />
    </div>
    <input 
    type="text" 
    placeholder="What are you looking for?" 
    value={query}
    onChange={handleInputChange}
    className="searchbar"
    />
    {/* <div>
        
        </div> */}
    
    </div>
    <div className="flex-container">
    { fil ? filteredIt(Shirtdata,inp)
    : ( col ? filteredColor(Shirtdata,selectedColor) : filteredData(Shirtdata,query,handleClick))}
    {console.log(fil)}
    </div>
    </div>)
}
export default Filter;