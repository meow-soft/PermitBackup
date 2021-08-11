import { getMethods } from './Methods';

const methods = getMethods('/customer');

export const Servers = Object.freeze({
  getAll: () => methods.get(),
  get: (id) => methods.get(`?id=${id}`),
  add: (url, server) => methods.post(url, server),
  delete: (url) => methods.del(url),
});
