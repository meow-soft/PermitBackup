import React from 'react';
import LogoLink from '../LogoLink/LogoLink';
import NotificationsLink from '../NotificationsLink/NotificationsLink';
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
              <NotificationsLink />
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
