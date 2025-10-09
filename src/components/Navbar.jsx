import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
    </ul>
    
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="login">Login</a>
      </li>
    </ul>
  </div>
</nav>

            );    
}

export default Navbar; 
