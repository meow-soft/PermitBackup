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
    <div className={styles.addServer}>
      <button onClick={() => setShowForm(true)}>Add +</button>
    </div>
  );
};

export default AddServer;
