import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="headerNav">
      <img src={logo} alt="" />
      <div className="links">
        <Link to={`/shop`}>Shop</Link>
        <Link to={`/orders`}>Order</Link>
        <Link to={`/inventory`}>Inventory</Link>
        {user ? (
          <button onClick={handleSignOut} className="signOutButton">
            SignOUT
          </button>
        ) : (
          <Link to={`/login`}>Login</Link>
        )}
        <Link to={`/about`}>About</Link>
      </div>
    </nav>
  );
};

export default Header;
