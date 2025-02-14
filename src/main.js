import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);

app.use(router);

app.mount("#app");
