import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../assets/logo.png';
import User from '../User/User';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__title}>
          <h1>
            <a className={styles.navbar__logo} href="/">
              <img src={logo} className={styles.navbar__logoImage} alt="logo" />
              <span className={styles.navbar__logoText}>
                Permit Backup v.{process.env.REACT_APP_VERSION}
              </span>
            </a>
          </h1>
        </div>
        <div className={styles.navbar__links}>
          <ul className={styles.navbar__nav}>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className={styles.navbar__navItem}>
              <User />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
