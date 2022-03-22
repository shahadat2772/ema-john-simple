import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const { handleAddToCart } = props;
  // console.log(handleAddToCart);
  const sendProduct = () => {
    handleAddToCart(props.product);
  };
  return (
    <div className="product">
      <img src={img} alt="product image"></img>
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productPrice">Price: ${price}</p>
        <p className="productSeller">Manufacturer: {seller}</p>
        <p className="productRatings">Ratings: {ratings} Star</p>
      </div>
      <button onClick={sendProduct} className="cartBtn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
