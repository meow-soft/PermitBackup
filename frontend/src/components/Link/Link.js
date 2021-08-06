import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

const Link = ({ text, icon, to }) => {
  return (
    <li className={styles.link}>
      <RouterLink to={to}>
        <FontAwesomeIcon icon={icon} className={styles.link__icon} />
        {text}
      </RouterLink>
    </li>
  );
};

export default Link;
