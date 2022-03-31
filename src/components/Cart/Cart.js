import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  console.log(cart);
  //   const getTotal = (value) => {
  //     const total = cart.reduce(
  //       (previous, current) => previous + current.value,
  //       0
  //     );
  //     return total;
  //   };
  //   const totalPrice = getTotal(price);

  //   const getTotal = (previous, current) => previous + current.price;
  //   const total = cart.reduce(getTotal, 0);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order summery</h3>
      <p>Selected item: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
