import React from "react";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(productQuantity);
  return (
    <div>
      <h4>Order summery</h4>
      <p>Selected item: {cart.length}</p>
    </div>
  );
};

export default Cart;
