import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Page from '../Page/Page';
import History from '../History/History';
import styles from './App.module.scss';

function PermitBackupUIApp() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.app__main}>
        <Sidebar />
        <Page />
        <History />
      </div>
    </div>
  );
}

export default PermitBackupUIApp;
