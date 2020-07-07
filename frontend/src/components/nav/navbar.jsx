import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = ({ loggedIn, currentUser, fetchUser, openModal }) => {
  const sessionLinks = () => (
    <div className="navbar">
      <img className="logo" src={require(`./logo.png`)} alt=""></img>
      <div className="navbar-links">
        <Link className="login-demo-button" to={"/signup"}>Signup</Link>
        <Link className="login-demo-button" to={"/login"}>Login</Link>
      </div>
    </div>
  );

  const greeting = () => (
    <div className="navbar">
      <a href="#/dash">
        <img className="logo" src={require(`./logo.png`)} alt=""/>
      </a>
      <div className="user-modal" onClick={() =>
        openModal("profileDropDown")
        }
      >

        <img src={require('./calendar.png')} className="welcomeuser" alt="" />
        <span > {currentUser.handle}</span>
      </div>

    </div>
  );

  return loggedIn ? greeting() : sessionLinks();
};

export default NavBar;