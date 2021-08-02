import Server from '../../components/Servers/ServerCard';

export default {
  title: 'Components/ServerPage/ServerPage',
  component: Server,
};

export const SavedServer = () => (
  <Server
    host="google.com"
    name="Test"
    login="secret_login"
    password="secret_password"
  />
);
