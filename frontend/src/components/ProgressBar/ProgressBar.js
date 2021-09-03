import React from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ value }) => {
  return (
    <div className={styles.progressBar}>
      <span
        className={styles.progressBar__thumb}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
