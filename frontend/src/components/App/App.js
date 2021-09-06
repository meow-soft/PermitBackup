import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Page from '../Page/Page';
import History from '../History/History';
import styles from './App.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStore } from '../../stores';
import Login from '../../pages/Login';

function PermitBackupUIApp() {
  const { userStore } = useStore();

  if (!userStore.isAuth) {
    return <Login />;
  }

  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <div className={styles.app__main}>
          <Sidebar />
          <Page />
          <History />
        </div>
      </Router>
    </div>
  );
}

export default PermitBackupUIApp;
