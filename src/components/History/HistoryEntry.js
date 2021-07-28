import React from 'react';
import styles from './HistoryEntry.module.scss';

const HistoryEntry = ({ text, timestamp }) => {
  return (
    <div className={styles.historyEntry}>
      <div className="entryTimestamp">
        {new Date(timestamp).toLocaleString('en-US')}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default HistoryEntry;
