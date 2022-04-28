import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
const Orders = () => {
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useCart();

  const removeCartItem = (id) => {
    console.log(id, "Removes");
    const newCart = cart.filter((product) => product._id !== id);
    removeFromDb(id);
    setCart(newCart);
  };

  return (
    <div className="ordersContainer">
      <div className="cartItemContainer">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            removeCartItem={removeCartItem}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="ordersCartContainer">
        <Cart cart={cart}>
          <Link className="proceedBtn" to="/shipment">
            <p>Proceed Shipment</p>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
