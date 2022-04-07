import { action, computed, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class StorageStore {
  totalSpace = 0;

  usedSpace = 0;

  freeSpace = 0;

  constructor() {
    makeObservable(this, {
      totalSpace: observable,
      setTotalSpace: action,
      usedSpace: observable,
      setUsedSpace: action,
      freeSpace: observable,
      setFreeSpace: action,
      usedPercent: computed,
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

  get usedPercent() {
    return this.usedSpace / (this.totalSpace / 100);
  }
}

export const createStore = (props) => {
  return new StorageStore(props);
};
