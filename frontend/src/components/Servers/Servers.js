import React, { useEffect, useState } from 'react';
import { Api } from '../../api';
import AddServer from './AddServer';
import ServerCard from './ServerCard';
import styles from './Servers.module.scss';

const data = [
  {
    guid: Date.now(),
    host: 'http://server1.ru',
    name: 'Customer1',
  },
  {
    guid: Date.now() + 100,
    host: 'http://server2.ru',
    name: 'Customer2',
  },
  {
    guid: Date.now() + 500,
    host: 'http://server3.ru',
    name: 'Customer3',
  },
  {
    guid: Date.now() + 1000,
    host: 'http://server4.ru',
    name: 'Customer4',
  },
];

const Servers = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // TODO: load from backend
    Api.Servers.get(1).catch(console.error);
    setServers(data);
  }, []);

  const handleAdd = (server) => {
    setServers([...servers, server]);
  };

  return (
    <div className={styles.servers}>
      <div className={styles.servers__list}>
        {servers.map((server) => (
          <ServerCard key={server.guid} {...server} />
        ))}
      </div>
      <AddServer onAdd={handleAdd} />
    </div>
  );
};

export default Servers;
