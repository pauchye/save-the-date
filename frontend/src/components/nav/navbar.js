import React from 'react';
import { Link } from 'react-router-dom'

import navbarCSS from './_navbar.css'
import './navbar.scss'
import { openModal } from '../../actions/modal_actions';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div>
            <div>
              <button onClick={() => openModal("profileDropDown")}>welcome</button>

                <button className='nav-button' onClick={this.logoutUser}>Logout</button>
            </div>

            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      } else {
        return (
          <div className="navbar-links">
                <Link to={'/signup'} className='nav-button'>Signup</Link>
                <Link to={'/login'} className='nav-button'>Login</Link>
          </div>
        );
      }
  }

  render() {
      return (

        <div className="navbar">
            <h1>Save the Date</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;