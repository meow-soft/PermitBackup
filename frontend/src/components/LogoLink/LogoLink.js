import React from 'react';
import styles from './LogoLink.module.scss';
import logo from '../../assets/logo.png';

const LogoLink = () => {
  return (
    <a className={styles.logoLink} href="/">
      <img src={logo} className={styles.logoLink__image} alt="logo" />
      <div className={styles.logoLink_text}>
        Permit Backup v.{process.env.REACT_APP_VERSION}
      </div>
    </a>
  );
};

export default LogoLink;
