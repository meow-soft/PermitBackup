import './index.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Page from '../Page/Page';
import History from '../History/History';

function PermitBackupUIApp() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Page />
        <History />
      </div>
    </div>
  );
}

export default PermitBackupUIApp;
