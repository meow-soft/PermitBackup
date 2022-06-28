<template>
  <router-view></router-view>
  <div>
    <PrDataTable :value="customers">
      <PrColumn field="dbName" header="Name" />
      <PrColumn field="url" header="URL" />
    </PrDataTable>
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
      title: "",
    };
  },
  methods: {
    retrieveCustomers() {
      apiCustomer
        .getAll()
        .then((response) => {
          this.customers = response.data.content;
          console.log(response.data);
        })
        .catch((e) => {
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
  },
};
</script>

