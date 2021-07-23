import React from 'react';
import ReactDOM from 'react-dom';
import PermitBackupUIApp from './components/App';
import reportWebVitals from './reportWebVitals';

const APP_ROOT_ID = 'permit-backup-ui-root';

ReactDOM.render(
  <React.StrictMode>
    <PermitBackupUIApp />
  </React.StrictMode>,
  document.getElementById(APP_ROOT_ID)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
