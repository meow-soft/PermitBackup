import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../stores';
import AddServer from './AddServer';
import ServerCard from './ServerCard';
import styles from './Servers.module.scss';

const Servers = () => {
  const { serverStore } = useStore();

  useEffect(() => {
    serverStore.loadServers().catch(console.error);
  }, [serverStore]);

  return (
    <div className={styles.servers}>
      <div className={styles.servers__list}>
        {serverStore.servers.map((server) => (
          <ServerCard key={server.dbName} {...server} />
        ))}
      </div>
      <AddServer />
    </div>
  );
};

export default observer(Servers);
