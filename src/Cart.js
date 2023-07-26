import React, { useState } from "react";
import { useEffect } from "react";
import {IoMdReturnLeft} from "react-icons/io"

function Cart({cart,setCart,handleRemove,setShow})
{
    const [price,setPrice]= useState(0);

    const changePrice = () =>{
        let amt=0;
        cart.map(({price}) =>
            (amt+=parseFloat(price))
        )
        setPrice(amt);
    }
    useEffect(() => {
        changePrice();
      }, [cart]);

    //   const handleRemove = (id) => {
    //     console.log("Remove clicked for id:", id);
    //     setCart((prevcart) => prevcart.filter((item)=> item.id !== id));
    //   }

    //   useEffect(()=>{
    //     console.log(cart);
    //   },[cart])


    return(
        <React.Fragment>
        <header className="cartHead">
            My Cart
        </header>
        <div className="goback" onClick={()=> setShow(true)}>
        <p className="arw"><IoMdReturnLeft /></p>
        <p>Return to Shopping</p>
        </div>
        <div className="flex-container">
        {
            cart.map(({name,img,id})=>(
            <div>
                <img src={img} 
                height="250px" 
                width="200px"></img>
                <br />
                <p>{name}</p>
                <span><button className="sideb">-</button>
                <p className="cont">1</p>
                <button className="sideb">+</button></span>
                <br></br>
                <button className="remove" onClick={() => handleRemove({id})}>Remove</button>
            </div>
            ))
        }
        </div>
        <div className="ttamt">
            <div>
                
            </div>
            <div>
            <h4>Total Amount: </h4>
            <span className="tot">{price}</span>
            <br></br><br></br><br></br><br></br>
            <button className="proceed">Proceed to Payment  ⇨</button>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Cart;