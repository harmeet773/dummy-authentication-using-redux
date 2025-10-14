import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector  } from "react-redux";

//console.log(isAuthenticated);

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated === true  ) ;
  console.log("hii" , isAuthenticated);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
        </ul>
      {  isAuthenticated  ? (   <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
        </ul>  ) : ( <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </ul>)   }
        


      </div>
    </nav>
  );
};

export default Navbar;
