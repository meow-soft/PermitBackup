import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class StorageStore {
  totalSpace = null;

  usedSpace = null;

  freeSpace = null;

  constructor() {
    makeObservable(this, {
      totalSpace: observable,
      setTotalSpace: action,
      usedSpace: observable,
      setUsedSpace: action,
      freeSpace: observable,
      setFreeSpace: action,
    });
  }

  async load() {
    const response = await Api.Storage.get();
    const payload = await response.json();
    this.setTotalSpace(payload.totalSpace);
    this.setUsedSpace(payload.usedSpace);
    this.setFreeSpace(payload.freeSpace);
  }

  setTotalSpace(totalSpace) {
    this.totalSpace = totalSpace;
  }

  setUsedSpace(usedSpace) {
    this.usedSpace = usedSpace;
  }

  setFreeSpace(freeSpace) {
    this.freeSpace = freeSpace;
  }
}

export const createStore = (props) => {
  return new StorageStore(props);
};
