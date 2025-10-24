import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createReducer } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const getUserDetails = {};
const userLoginReducer = createReducer(getUserDetails, (builder) => {
  builder
    .addCase("updateUserDetails", (state, action) => {
      //console.log("updateUserDetails executed");
      return { ...state,...action.payload };
    })
    .addCase("getUserDetails", (state, action) => {
      return state;
    });
});
export { userLoginReducer, getUserDetails };

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [displayMessage, setDisplayMessage] = useState("");
  const authenticateUser = (email, password) => {
    setDisplayMessage("");
    //console.log("Authenticating user with email:", email);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Request failed with status ${res.status}`
          );
        }
        return res.json(); // return data for successful responses
      })
      .then((data) => {
        console.log("Login successful:", data);
        const {accessToken,refreshToken} = data ;
        console.log(accessToken);
        dispatch({
          type: "updateUserDetails",
          payload: { isAuthenticated: true, accessToken,refreshToken },
        });
        // ✅ Navigate after successful login
        navigate("/profile");
      })
      .catch((err) => {
        setDisplayMessage(err.message);
      });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log("email is ", email);
    //console.log("password is ", password);
    authenticateUser(email, password);
  };

  return (
    <>
      <div> User credentials is - </div>
      <ul>
        <li>username: sophiab </li>
        <li>password: sophiabpass </li>
      </ul>
      {displayMessage && (
        <div className="alert alert-danger" role="alert">
          {displayMessage}
        </div>
      )}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            ref={emailRef}
            type="text"
            className="form-control"
            id="userName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Login;
