import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const emailRef = useRef("hiii");
  const passwordRef = useRef("dsfdsfsdf");
  const dispatch = useDispatch();

  const authenticateUser = (email, password) => {
    console.log("authenticating user with email ", email, " and password ", password);
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  
        username: email,
        password: password,
      })}).then(res => res.json()) 
    .then(data => {
      console.log("Response:", data);
      // Dispatch an action with the login data
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    }).catch(err => {
      console.error("Login failed:", err);
    })};
  




  const submitForm = (e) => {
    e.preventDefault();
    console.log("email is ", emailRef.current.value);
    console.log("password is ", passwordRef.current.value);
    authenticateUser(emailRef.current.value, passwordRef.current.value);
    window.alert("form submitted");
  }
  return (<>

  <div> User credentials is -    </div>
  <ul>
    <li>username: sophiab </li>
    <li>password: sophiabpass </li>
  </ul>

    <form onSubmit={submitForm} >
      <div className="form-group">
        <label htmlFor="userName">Username</label>
        <input ref={emailRef} type="text" className="form-control" id="userName" required />

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary"  >Submit</button>
    </form>
  </>
  );
}

export default Login;