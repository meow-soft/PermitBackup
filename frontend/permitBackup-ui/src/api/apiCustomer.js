import apiHelper from "./apiHelper";

class ApiCustomer {
    getAll() {
        return apiHelper.get('/customer');
    }

    get(id) {
        return apiHelper.get('/customer/${id}')
    }

    create(data) {
        return apiHelper.post("/customer", data);
    }
    update(id, data) {
        return apiHelper.put('/customer/${id}', data);
    }
}

export default ApiCustomer();