import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class ServerStore {
  servers = [];

  links = [];

  constructor() {
    makeObservable(this, {
      servers: observable,
      setServers: action,
      links: observable,
      setLinks: action,
    });
  }

  async loadServers() {
    const response = await Api.Servers.getAll();
    const payload = await response.json();
    this.setServers(payload._embedded.customer);
    this.setLinks(payload._links);
  }

  async create(server) {
    await Api.Servers.add(this.links.self.href, server);
    await this.loadServers();
  }

  async delete(server) {
    await Api.Servers.delete(server._links.self.href);
    await this.loadServers();
  }

  setServers(servers) {
    this.servers = servers;
  }

  setLinks(links) {
    this.links = links;
  }
}

export const createStore = (props) => {
  return new ServerStore(props);
};
