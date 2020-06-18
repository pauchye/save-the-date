import React from "react";
import { Link } from "react-router-dom";

// import navbarCSS from "./_navbar.css";
import "./navbar.scss";

const NavBar = ({ loggedIn, currentUser, fetchUser, openModal }) => {
    // debugger;
  const sessionLinks = () => (
    <div className="navbar">
      <h1>Save the Date</h1>
      <div className="navbar-links">
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );

  const greeting = () => (
    <div>
      <h1>Save the Date</h1>
      <a className="l" onClick={() => {
        fetchUser(currentUser.id)
        openModal("profileDropDown")
    }}>
        <span className="modal-buton">welcome {currentUser.handle}</span>
      </a>
    </div>
  );

  return loggedIn ? greeting() : sessionLinks();
};

export default NavBar;