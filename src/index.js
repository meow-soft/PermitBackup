import React from 'react';
import { render } from 'react-dom';
import PermitBackupUIApp from './components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const APP_ROOT_ID = 'permit-backup-ui-root';

render(
  <React.StrictMode>
    <PermitBackupUIApp />
  </React.StrictMode>,
  document.getElementById(APP_ROOT_ID)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
