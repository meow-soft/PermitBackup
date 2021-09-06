import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../stores';
import styles from './Settings.module.scss';

const Settings = () => {
  const { settingsStore } = useStore();

  useEffect(() => {
    settingsStore.load().catch(console.error);
  }, [settingsStore]);

  const handleSave = (e) => {
    e.preventDefault();
    settingsStore.save().catch(console.error);
  };

  return (
    <div className={styles.settings}>
      <form>
        <div>
          <label>Output folder</label>
          <input
            value={settingsStore.outputFolder}
            onChange={(e) => settingsStore.setOutputFolder(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default observer(Settings);
