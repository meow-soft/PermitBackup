import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Link.module.scss';

const Link = ({ text, icon }) => {
  return (
    <li className={styles.link}>
      <FontAwesomeIcon icon={icon} className={styles.link__icon} />
      {text}
    </li>
  );
};

export default Link;
