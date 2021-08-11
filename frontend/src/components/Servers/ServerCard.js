import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useStore } from '../../stores';
import styles from './ServerCard.module.scss';

const Server = ({ server }) => {
  const { serverStore } = useStore();

  const handleDelete = () => {
    serverStore.delete(server).catch(console.error);
  };

  return (
    <div className={styles.serverCard}>
      <div className={styles.serverCard__content}>
        <div>
          <div>DB Name: {server.dbName}</div>
          <div>Url: {server.url}</div>
          <div>Active: {server.isActive ? 'Yes' : 'No'}</div>
        </div>
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Server;
