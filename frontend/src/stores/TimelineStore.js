import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api';

class TimelineStore {
  activities = [];

  constructor() {
    makeObservable(this, {
      activities: observable,
      setActivities: action,
    });
  }

  async load() {
    const response = await Api.History.getAll();
    const activities = await response.json();
    this.setActivities(activities);
  }

  setActivities(activities) {
    this.activities = activities;
  }
}

export const createStore = (props) => {
  return new TimelineStore(props);
};
