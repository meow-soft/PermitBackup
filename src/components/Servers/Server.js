import React from 'react';
import styles from './Server.module.scss';

const Server = ({ host, name, login, password }) => {
  return (
    <div className={styles.server}>
      <div>{host}</div>
      <div>{name}</div>
      <div>{login}</div>
      <div>{password}</div>
    </div>
  );
};

export default Server;
