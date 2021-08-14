import {
  faClock,
  faCogs,
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
          <Link text="Home" to="/home" icon={faHome} />
          <Link text="Downloads" to="/downloads" icon={faDownload} />
          <Link text="Scheduler" to="/scheduler" icon={faClock} />
          <Link text="Servers" to="/servers" icon={faServer} />
          <Link text="Settings" to="/settings" icon={faCogs} />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
