import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../assets/logo.png';
import User from '../User/User';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbarContent">
        <div className="navbarTitle">
          <h1 className="title">
            <a className="logo" href="#">
              <img src={logo} className="logoImage" alt="logo" />
              <span className="logoText">
                Permit Backup v.{process.env.REACT_APP_VERSION}
              </span>
            </a>
          </h1>
        </div>
        <div className="navbarLinks">
          <ul className="navbarNav">
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className="navItem">
              <User />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
