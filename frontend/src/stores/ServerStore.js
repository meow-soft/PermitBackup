import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class ServerStore {
  servers = [];

  constructor() {
    makeObservable(this, {
      servers: observable,
      setServers: action,
    });
  }

  async loadServers() {
    const response = await Api.Servers.getAll();
    const payload = await response.json();
    this.setServers(payload._embedded.customer);
  }

  async createServer(server) {
    const response = await Api.Servers.add(server);
    const payload = await response.json();
    console.log(payload);
    await this.loadServers();
  }

  setServers(servers) {
    this.servers = servers;
  }
}

export const createStore = (props) => {
  return new ServerStore(props);
};
