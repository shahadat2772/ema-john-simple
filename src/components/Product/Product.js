import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="product image"></img>
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productPrice">Price: ${price}</p>
        <p className="productSeller">Manufacturer: {seller}</p>
        <p className="productRatings">Ratings: {ratings} Star</p>
      </div>
      <button className="cartBtn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
