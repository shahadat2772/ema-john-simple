import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  // console.log(props.addToChart);
  const { addToChart } = props;
  // console.log(addToChart);
  return (
    <div className="product">
      <img src={img} alt="product image"></img>
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productPrice">Price: ${price}</p>
        <p className="productSeller">Manufacturer: {seller}</p>
        <p className="productRatings">Ratings: {ratings} Star</p>
      </div>
      <button onClick={() => addToChart(props.product)} className="cartBtn">
        <p style={{ marginRight: "5px" }}>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
