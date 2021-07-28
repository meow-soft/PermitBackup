import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LogoLink from '../LogoLink/LogoLink';
import UserLink from '../UserLink/UserLink';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__title}>
          <LogoLink />
        </div>
        <div className={styles.navbar__links}>
          <ul className={styles.navbar__nav}>
            <li className={styles.navbar__navItem}>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className={styles.navbar__navItem}>
              <UserLink />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
