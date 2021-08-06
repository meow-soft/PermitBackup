import React from 'react';
import styles from './ServerCard.module.scss';

const Server = ({ host, name, login, password }) => {
  return (
    <div className={styles.serverCard}>
      <div className={styles.serverCard__content}>
        <div>{host}</div>
        <div>{name}</div>
        <div>{login}</div>
        <div>{password}</div>
      </div>
    </div>
  );
};

export default Server;
