const BASE_URL = ''; //'http://localhost:8080/'; //window.location.origin;
const API_BASE = '';

export const getMethods = (path) => {
  return {
    /**
     * Fetches resource with GET method.
     * @param {String} url
     * @returns {Promise<Response>}
     */
    get: (url) =>
      window.fetch(`${BASE_URL}${API_BASE}${path}${url}`, {
        method: 'GET',
      }),

    /**
     * Fetches resource with POST method.
     * @param {String} url
     * @param {BodyInit} body
     * @returns {Promise<Response>}
     */
    post: (url, body) =>
      window.fetch(`${BASE_URL}${API_BASE}${path}${url}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body),
      }),

    /**
     * Fetches resource with PUT method
     * @param {String} url
     * @param {BodyInit} body
     * @returns {Promise<Response>}
     */
    put: (url, body) =>
      window.fetch(`${BASE_URL}${API_BASE}${path}${url}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body),
      }),

    /**
     * Fetches resource with DELETE method.
     * @param {String} url
     * @returns {Promise<Response>}
     */
    del: (url) =>
      window.fetch(`${BASE_URL}${API_BASE}${path}${url}`, {
        method: 'DELETE',
      }),
  };
};
