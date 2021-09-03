import { getMethods } from './Methods';

const methods = getMethods('/stats');

export const Storage = Object.freeze({
  get: () => methods.get(),
});
