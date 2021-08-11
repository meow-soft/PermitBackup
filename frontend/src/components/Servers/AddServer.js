import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../stores';
import styles from './AddServer.module.scss';
import ServerForm from './ServerForm';

const AddServer = () => {
  const [showForm, setShowForm] = useState(false);
  const { serverStore } = useStore();

  const handleCreate = (server) => {
    serverStore
      .create(server)
      .then(() => setShowForm(false))
      .catch(console.error);
  };

  if (showForm) {
    return (
      <ServerForm onCancel={() => setShowForm(false)} onApply={handleCreate} />
    );
  }

  return (
    <button className={styles.addServer} onClick={() => setShowForm(true)}>
      <div>Add</div>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default observer(AddServer);
