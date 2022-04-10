import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/shop";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-container">
      <div>
        <p className="form-title">Login</p>
        <form onSubmit={handleUserSignIn} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <p className="error">{error && error?.message}</p>
          {loading && <p>Loading...</p>}
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
