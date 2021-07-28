import React from 'react';
import styles from './User.module.scss';

const User = () => {
  return (
    <a className={styles.user}>
      <img
        src="https://i.pravatar.cc/300"
        alt="user-avatar"
        className={styles.user__avatar}
      />
    </a>
  );
};

export default User;
