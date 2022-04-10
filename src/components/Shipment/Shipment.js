import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const handleShipment = (e) => {
    e.preventDefault();
    const shippingInfo = { name, email, address, phone };
    console.log(shippingInfo);
  };

  return (
    <div className="form-container">
      <div>
        <p className="form-title">Shipping Information</p>
        <form onSubmit={handleShipment} action="">
          <div className="input-group">
            <label htmlFor="text">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              onBlur={handleAddressBlur}
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Phone Number</label>
            <input
              type="text"
              onBlur={handlePhoneBlur}
              name=""
              id=""
              required
            />
          </div>
          <p className="error">{error ? error : ""}</p>
          <input
            type="submit"
            className="form-submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
