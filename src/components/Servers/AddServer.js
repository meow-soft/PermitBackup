import React, { useState } from 'react';
import styles from './AddServer.module.scss';
import ServerForm from './ServerForm';

const AddServer = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <ServerForm
        onCancel={() => setShowForm(false)}
        onApply={(server) => {
          onAdd(server);
          setShowForm(false);
        }}
      />
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

export default AddServer;
