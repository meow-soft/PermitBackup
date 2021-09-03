import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../stores';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './StorageStats.module.scss';

const StorageStats = () => {
  const { storageStore } = useStore();

  useEffect(() => {
    storageStore.load().catch(console.error);
  }, [storageStore]);

  return (
    <div className={styles.storageStats}>
      <FontAwesomeIcon icon={faDatabase} /> Space usage
      <ProgressBar value={storageStore.usedPercent} />
    </div>
  );
};

export default observer(StorageStats);
