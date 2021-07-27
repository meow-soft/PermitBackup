import {
  faDownload,
  faHome,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside className="sidebarNav">
        <ul className="sidebarNavLinks">
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
