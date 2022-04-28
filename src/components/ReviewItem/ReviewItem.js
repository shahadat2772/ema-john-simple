import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, removeCartItem }) => {
  const { name, price, shipping, quantity, img, _id } = product;
  return (
    <div className="reviewItemContainer">
      <img src={img} alt="" />
      <div className="infoContainer">
        <p className="name">
          {name.lrngth < 15 ? name : name.slice(0, 15) + "..."}
        </p>
        <p className="price">Price: ${price}</p>
        <p className="quantity">Quant: {quantity}</p>
        <p className="shipping">Ship: ${shipping}</p>
      </div>
      <div className="deleteButton">
        <button
          onClick={() => {
            removeCartItem(_id);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
