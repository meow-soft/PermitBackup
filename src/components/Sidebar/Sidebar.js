import {
  faDownload,
  faHome,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from '../Link/Link';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar__nav}>
        <ul className={styles.sidebar__navLinks}>
          <Link text="Home" icon={faHome} />
          <Link text="Downloads" icon={faDownload} />
          <Link text="Servers" icon={faServer} />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
