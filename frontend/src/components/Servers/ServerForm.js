import React, { useEffect, useState } from 'react';
import { Api } from '../../api';
import styles from './ServerForm.module.scss';

const ServerForm = ({ onCancel, onApply }) => {
  const [host, setHost] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    resetFields();
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleApply = (e) => {
    e.preventDefault();
    Api.Servers.add({
      dbName: name,
      url: host,
    }).catch(console.error);
  };

  const resetFields = () => {
    setHost('');
    setName('');
  };

  return (
    <form className={styles.serverForm}>
      <div>
        Host
        <input value={host} onChange={(e) => setHost(e.target.value)} />
      </div>
      <div>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button onClick={handleApply}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ServerForm;
