import apiHelper from "./apiHelper";

class ApiConfig {
    getAll() {
        return apiHelper.get('/config')
    }

    get(id) {
        return apiHelper.get('/config/${id}')
    }

    create(data) {
        return apiHelper.post("/config", data);
    }
    update(id, data) {
        return apiHelper.put('/config/${id}', data);
    }
}
export default new ApiConfig();