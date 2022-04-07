import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useStore } from '../../stores';
import cn from 'classnames';
import styles from './ServerCard.module.scss';

const Server = ({ server }) => {
  const { serverStore } = useStore();

  const handleDelete = () => {
    serverStore.delete(server).catch(console.error);
  };

  const cardClasses = cn(styles.serverCard, {
    [styles['serverCard--on']]: server.isActive,
  });

  return (
    <div className={cardClasses}>
      <div className={styles.serverCard__content}>
        <div>
          <div>DB Name: {server.dbName}</div>
          <div>Url: {server.url}</div>
        </div>
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Server;
