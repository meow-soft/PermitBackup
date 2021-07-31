import React, { useEffect, useState } from 'react';
import styles from './ServerForm.module.scss';

const ServerForm = ({ onCancel, onApply }) => {
  const [host, setHost] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    resetFields();
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleApply = (e) => {
    e.preventDefault();
    onApply({
      guid: Date.now(),
      host,
      name,
      login,
      password,
    });
  };

  const resetFields = () => {
    setHost('');
    setName('');
    setLogin('');
    setPassword('');
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
        Login
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
      </div>
      <div>
        Password
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleApply}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ServerForm;
