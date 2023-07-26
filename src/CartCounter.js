import React from 'react';

const CartCounter = ({ count }) => {
  return (
    <div>
      <p>Items in cart :{count}</p>
    </div>
  );
};

export default CartCounter;