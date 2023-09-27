import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/index.vue";
import PageNotFound from "./views/notfound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/:catchAll(.*)",
      component: PageNotFound,
    },
  ],
});

export default router;
