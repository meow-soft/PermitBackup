import { action, makeObservable, observable } from 'mobx';

const fakeActivies = [
  {
    id: Date.now(),
    text: 'Alameda backup downloaded.',
    timestamp: Date.now(),
  },
  {
    id: Date.now() + 1,
    text: 'Tinley park backup started.',
    timestamp: Date.now() + 1000,
  },
  {
    id: Date.now() + 2,
    text: 'Backups cleaned up.',
    timestamp: Date.now() + 2000,
  },
  {
    id: Date.now() + 3,
    text: "Wyoming's backup process has failed.",
    timestamp: Date.now() + 5000,
  },
];

class TimelineStore {
  activities = [];

  constructor() {
    makeObservable(this, {
      activities: observable,
      setActivities: action,
    });
    this.setActivities(fakeActivies);
  }

  setActivities(activities) {
    this.activities = activities;
  }
}

export const createStore = (props) => {
  return new TimelineStore(props);
};
