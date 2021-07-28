import {
  faDownload,
  faHome,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar__nav}>
        <ul className={styles.sidebar__navLinks}>
          <li>
            <FontAwesomeIcon icon={faHome} />
            Home
          </li>
          <li>
            <FontAwesomeIcon icon={faDownload} />
            Downloads
          </li>
          <li>
            <FontAwesomeIcon icon={faServer} />
            Servers
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
