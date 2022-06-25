<template>
  <div class="list row">
    <div class="col-md-8">
<!--      <div class="input-group mb-3">-->
<!--        <input type="text" class="form-control" placeholder="Search by title"-->
<!--               v-model="title"/>-->
<!--        <div class="input-group-append">-->
<!--          <button class="btn btn-outline-secondary" type="button"-->
<!--                  @click="searchTitle"-->
<!--          >-->
<!--            Search-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="col-md-6">
      <h4>Customer List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(customer, index) in customers"
            :key="index"
            @click="setActiveCustomer(customer, index)"
        >
          {{ customer.dbName }}
        </li>
      </ul>
<!--      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">-->
<!--        Remove All-->
<!--      </button>-->
    </div>
    <div class="col-md-6">
      <div v-if="currentCustomer">
        <h4>Customer</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentCustomer.dbName }}
        </div>
        <div>
          <label><strong>URL:</strong></label> {{ currentCustomer.url }}
        </div>

        <router-link :to="'/customers/' + currentCustomer.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Customer...</p>
      </div>
    </div>
  </div>
</template>
<script>
import apiCustomer from "../../api/apiCustomer";
export default {
  name: "customer-list",
  data() {
    return {
      customers: [],
      currentCustomer: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveCustomers() {
      apiCustomer.getAll()
          .then(response => {
            this.customers = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveCustomers();
      this.currentCustomer = null;
      this.currentIndex = -1;
    },
    setActiveCustomer(customer, index) {
      this.currentCustomer = customer;
      this.currentIndex = customer ? index : -1;
    },
    // removeAllTutorials() {
    //   TutorialDataService.deleteAll()
    //       .then(response => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    // },

    // searchTitle() {
    //   TutorialDataService.findByTitle(this.title)
    //       .then(response => {
    //         this.tutorials = response.data;
    //         this.setActiveTutorial(null);
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    // }
  },
  mounted() {
    this.retrieveCustomers();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>