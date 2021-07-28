import React from 'react';
import HistoryEntry from './HistoryEntry';
import styles from './History.module.scss';

const historyEntries = [
  {
    id: Date.now(),
    text: 'Alameda backup downloaded.',
    timestamp: Date.now(),
  },
  {
    id: Date.now() + 1,
    text: 'Tinley park backup started.',
    timestamp: Date.now() + 1000,
  },
  {
    id: Date.now() + 2,
    text: 'Backups cleaned up.',
    timestamp: Date.now() + 2000,
  },
  {
    id: Date.now() + 3,
    text: "Wyoming's backup process has failed.",
    timestamp: Date.now() + 5000,
  },
];

const History = () => {
  return (
    <div className={styles.history}>
      {historyEntries.map((entry) => (
        <HistoryEntry key={entry.id} {...entry} />
      ))}
    </div>
  );
};

export default History;
