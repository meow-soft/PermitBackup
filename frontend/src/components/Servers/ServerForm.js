import React, { useEffect, useState } from 'react';
import styles from './ServerForm.module.scss';

const ServerForm = ({ onCancel, onApply }) => {
  const [dbName, setDbName] = useState('');
  const [url, setUrl] = useState('');

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
      dbName,
      url,
    });
  };

  const resetFields = () => {
    setDbName('');
    setUrl('');
  };

  return (
    <form className={styles.serverForm}>
      <div>
        DB Name
        <input value={dbName} onChange={(e) => setDbName(e.target.value)} />
      </div>
      <div>
        Url
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div>
        <button onClick={handleApply}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ServerForm;
