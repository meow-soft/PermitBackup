import Server from '../../components/Servers/ServerCard';
import { StoreProvider } from '../../stores';

export default {
  title: 'Components/Server',
  component: Server,
};

export const Active = () => {
  const mockStores = {
    serverStore: {},
  };

  const mockServer = {
    dbName: 'TestDB',
    url: 'http://test.com',
    isActive: true,
  };

  return (
    <StoreProvider store={mockStores}>
      <Server server={mockServer} />
    </StoreProvider>
  );
};

export const NotActive = () => {
  const mockStores = {
    serverStore: {},
  };

  const mockServer = {
    dbName: 'TestDB',
    url: 'http://test.com',
    isActive: false,
  };

  return (
    <StoreProvider store={mockStores}>
      <Server server={mockServer} />
    </StoreProvider>
  );
};
