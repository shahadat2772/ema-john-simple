import "./Login.css";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase.init";
import React, { useEffect, useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();
  const gitAuth = new GithubAuthProvider();

  const [user, setUser] = useState({});

  const withGoogle = () => {
    signInWithPopup(auth, googleAuth)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.error(err));
  };

  const withGit = () => {
    signInWithPopup(auth, gitAuth)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // console.log("AMI BABU");
        setUser({});
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="loginContainer">
      <p className="signWith">Sing With</p>
      <div className="">
        {user.uid ? (
          <button onClick={handleSignOut}>SignOUT</button>
        ) : (
          <>
            <button onClick={withGoogle}>Google</button>
            <button onClick={withGit}>GitHub</button>
          </>
        )}
      </div>

      {user.uid && (
        <div className="useContainer">
          <img src={user.photoURL} alt="" />
          <p className="name">Welcome, {user.displayName}</p>
          <p className="email">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
