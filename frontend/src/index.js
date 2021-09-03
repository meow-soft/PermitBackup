import React from 'react';
import { render } from 'react-dom';
import PermitBackupUIApp from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './stores/StoreContext';
import {
  createServerStore,
  createSettingsStore,
  createTimelineStore,
  createUserStore,
  createStorageStore,
} from './stores';
import './index.scss';

const APP_ROOT_ID = 'permit-backup-ui-root';

const createStores = () => {
  return {
    userStore: createUserStore(),
    serverStore: createServerStore(),
    timelineStore: createTimelineStore(),
    settingsStore: createSettingsStore(),
    storageStore: createStorageStore(),
  };
};

const stores = createStores();

render(
  <React.StrictMode>
    <StoreProvider store={stores}>
      <PermitBackupUIApp />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById(APP_ROOT_ID)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
