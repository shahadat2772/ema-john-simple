import React, { useState } from "react";
import { Link } from "react-router-dom";

const SIgnUp = () => {
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

  return (
    <div className="form-container">
      <div>
        <p className="form-title">Sign Up</p>
        <form action="">
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
