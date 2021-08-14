import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class SettingsStore {
  outputFolder = null;

  constructor() {
    makeObservable(this, {
      outputFolder: observable,
      setOutputFolder: action,
    });
  }

  async load() {
    await Api.Settings.load();
  }

  async save() {
    await Api.Settings.update({
      outputFolder: this.outputFolder,
    });
  }

  setOutputFolder(outputFolder) {
    this.outputFolder = outputFolder;
  }
}

export const createStore = (props) => {
  return new SettingsStore(props);
};
