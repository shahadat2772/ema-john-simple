import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <p className="form-title">Login</p>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" required />
          </div>
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p className="form-link-text">
          New to Ema-john?{" "}
          <Link to={`/signup`} className="form-link">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
