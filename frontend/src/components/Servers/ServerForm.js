import React, { useEffect, useState } from 'react';
import styles from './ServerForm.module.scss';

const ServerForm = ({ onCancel, onApply }) => {
  const [dbName, setDbName] = useState('');
  const [url, setUrl] = useState('');
  const [isActive, setActive] = useState(false);

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
      isActive,
    });
  };

  const resetFields = () => {
    setDbName('');
    setUrl('');
    setActive(false);
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
        Active
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setActive(e.target.checked)}
        />
      </div>
      <div>
        <button onClick={handleApply}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ServerForm;
