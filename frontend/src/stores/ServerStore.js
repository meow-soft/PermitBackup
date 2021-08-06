import { action, makeObservable, observable } from 'mobx';

class ServerStore {
  servers = [];

  constructor() {
    makeObservable(this, {
      servers: observable,
      setServers: action,
    });
  }

  setServers(servers) {
    this.servers = servers;
  }
}

export const createStore = (props) => {
  return new ServerStore(props);
};
