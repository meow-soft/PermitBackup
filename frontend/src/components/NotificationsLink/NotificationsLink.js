import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './NotificationsLink.module.scss';

const NotificationsLink = () => {
  return (
    <a className={styles.notificationsLink} href="/notifications">
      <FontAwesomeIcon icon={faBell} />
    </a>
  );
};

export default NotificationsLink;
