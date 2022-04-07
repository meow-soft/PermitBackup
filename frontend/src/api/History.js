import { getMethods } from './Methods';

const methods = getMethods('/history');

export const History = Object.freeze({
  getAll: () => methods.get(),
});
