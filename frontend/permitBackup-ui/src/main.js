import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

createApp(App)
  .component("PrDataTable", DataTable)
  .component("PrColumn", Column)
  .component("Menubar", Menubar)
  .use(router)
  .use(PrimeVue)
  .use(createPinia)
  .mount("#app");
