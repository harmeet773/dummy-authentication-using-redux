import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createReducer } from "@reduxjs/toolkit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const userDetails = {};
const userLoginReducer = createReducer(userDetails, (builder) => {
  builder
    .addCase("addUserDetails", (state, action) => {
      console.log("addUserDetails executed");
      return { ...action.payload };
    })
    .addCase("userDetails", (state, action) => {
      return state;
    })
});
export { userLoginReducer, userDetails };
const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [displayMessage, setDisplayMessage] = useState("");
  const authenticateUser = (email, password) => {
    setDisplayMessage("");
    console.log("Authenticating user with email:", email);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (res) => {
        if (!res.ok) {
          // res.ok is false for status codes 400–599
          // handle non-JSON responses too
          const errorData = await res.json().catch(() => ({})); 
          throw new Error(
            errorData.message || `Request failed with status ${res.status}`);
        }
        return res.json(); // return data for successful responses
      })
      .then((data) => {
        console.log("Login successful:", data);
        // Dispatch your Redux action here
        dispatch({ type: "addUserDetails", payload: { isAuthenticated : true  , ...data} });
      })
      .catch((err) => {
        setDisplayMessage(err.message);
      });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("email is ", emailRef.current.value);
    console.log("password is ", passwordRef.current.value);
    authenticateUser(emailRef.current.value, passwordRef.current.value);
    navigate("/profile");
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
