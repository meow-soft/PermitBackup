import './index.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Page from '../Page/Page';

function PermitBackupUIApp() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Page />
      </div>
    </div>
  );
}

export default PermitBackupUIApp;
