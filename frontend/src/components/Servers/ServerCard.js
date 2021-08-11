import React from 'react';
import styles from './ServerCard.module.scss';

const Server = ({ dbName, url, isActive }) => {
  return (
    <div className={styles.serverCard}>
      <div className={styles.serverCard__content}>
        <div>Db Name: {dbName}</div>
        <div>Url: {url}</div>
        <div>Active: {isActive ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default Server;
