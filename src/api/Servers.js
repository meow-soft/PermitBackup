import { createApi } from './Requests';

const serversApi = createApi('/customer');

export const Servers = Object.freeze({
  get: (id) => serversApi.get(`?id=${id}`),
  add: (server) => serversApi.post('', server),
});
