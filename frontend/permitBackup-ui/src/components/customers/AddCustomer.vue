<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">DBName</label>
        <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="customer.dbName"
            name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">URL</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="customer.url"
            name="description"
        />
      </div>
      <button @click="saveCustomer" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCustomer">Add</button>
    </div>
  </div>
</template>
<script>
import apiCustomer from "../../api/apiCustomer";

export default {
  name: "add-customer",
  data() {
    return {
      customer: {
        id: null,
        dbName: "",
        isActive: true,
        token: null,
        url: ""
      },
      submitted: false
    };
  },
  methods: {
    saveCustomer() {
      var data = {
        dbName: this.customer.dbName,
        url: this.customer.url,
        isActive: true
      };
      apiCustomer.create(data)
          .then(response => {
            this.customer.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newCustomer() {
      this.submitted = false;
      this.customer = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>