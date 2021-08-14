import { getMethods } from './Methods';

const methods = getMethods('/settings');

export const Settings = Object.freeze({
  get: (id) => methods.get(`?id=${id}`),
  update: (url, settings) => methods.put(url, settings),
});
