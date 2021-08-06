import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './HistoryEntry.module.scss';

const HistoryEntry = ({ text, timestamp }) => {
  return (
    <li className={styles.historyEntry}>
      <div className={styles.historyEntry__icon}>
        <FontAwesomeIcon icon={faDotCircle} />
      </div>
      <div className={styles.historyEntry__content}>
        <div className={styles.historyEntry__card}>
          <h6 className={styles.historyEntry__timestamp}>
            {new Date(timestamp).toLocaleString('en-US')}
          </h6>
          <div>{text}</div>
        </div>
      </div>
    </li>
  );
};

export default HistoryEntry;
