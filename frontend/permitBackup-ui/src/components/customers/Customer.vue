<template>
  <div v-if="currentCustomer" class="edit-form">
    <h4>Customer</h4>
    <form>
      <div class="form-group">
        <label for="dbName">DbName</label>
        <input type="text" class="form-control" id="dbName"
               v-model="currentCustomer.dbName"
        />
      </div>
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" class="form-control" id="url"
               v-model="currentCustomer.url"
        />
      </div>

    </form>
    <button type="submit" class="badge badge-success"
            @click="updateCustomer"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Customer...</p>
  </div>
</template>
<script>

import apiCustomer from "../../api/apiCustomer";
export default {
  name: "customer",
  data() {
    return {
      currentCustomer: null,
      message: ''
    };
  },
  methods: {
    getCustomer(id) {
      apiCustomer.get(id)
          .then(response => {
            this.currentCustomer = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateCustomer() {
      apiCustomer.update(this.currentCustomer.id, this.currentCustomer)
          .then(response => {
            console.log(response.data);
            this.message = 'The customer was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },
    // deleteTutorial() {
    //   TutorialDataService.delete(this.currentCustomer.id)
    //       .then(response => {
    //         console.log(response.data);
    //         this.$router.push({ name: "tutorials" });
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    // }
  },
  mounted() {
    this.message = '';
    this.getCustomer(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>