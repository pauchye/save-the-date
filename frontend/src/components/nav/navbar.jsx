import React from "react";
import { Link } from "react-router-dom";

// import navbarCSS from "./_navbar.css";
import "./navbar.scss";

const NavBar = ({ loggedIn, currentUser, fetchUser, openModal }) => {
    // debugger;
  const sessionLinks = () => (
    <div className="navbar">
      {/* <h1 className="logo">Save the Date</h1> */}
      <img className="logo" src={require(`./logo.png`)}></img>
      <div className="navbar-links">
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );

  const greeting = () => (
    <div className="navbar">
      {/* <h1>Save the Date</h1> */}
      <img className="logo" src={require(`./logo.png`)}></img>

      <a className="user-modal" onClick={() => {
        fetchUser(currentUser.id)
        openModal("profileDropDown")
        }}>
        <img src={require('./calendar.png')} className="welcomeuser"/>
        <span > {currentUser.handle}</span>
      </a>
    </div>
  );

  return loggedIn ? greeting() : sessionLinks();
};

export default NavBar;