import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../stores';
import style from './StorageStats.module.scss';

const StorageStats = () => {
  const { storageStore } = useStore();

  useEffect(() => {
    storageStore.load().catch(console.error);
  }, [storageStore]);

  return (
    <div className={style.storageStats}>
      <div>Total: {storageStore.totalSpace}</div>
      <div>Free: {storageStore.freeSpace}</div>
      <div>Used: {storageStore.usedSpace}</div>
    </div>
  );
};

export default observer(StorageStats);
