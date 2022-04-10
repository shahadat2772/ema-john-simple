import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const SIgnUp = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const navigate = useNavigate();

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not match!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six characters or more!");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <p className="form-title">Sign Up</p>
        <form onSubmit={handleCreateUser} action="">
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
              type="password"
              onBlur={handlePasswordBlur}
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              onBlur={handleConfirmPasswordBlur}
              name=""
              id=""
            />
          </div>
          <p className="error">{error ? error : ""}</p>
          <input type="submit" className="form-submit" value="Login" required />
        </form>
        <p className="form-link-text">
          Already have an account?{" "}
          <Link to={`/login`} className="form-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SIgnUp;
