import React from 'react';
import styles from './UserLink.module.scss';

const User = () => {
  return (
    <a className={styles.userLink} href="/user">
      <img
        src="https://i.pravatar.cc/300"
        alt="user-avatar"
        className={styles.userLink__avatar}
      />
    </a>
  );
};

export default User;
