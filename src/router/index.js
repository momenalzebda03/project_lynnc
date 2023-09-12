import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/PageNavbar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title ? to.meta.title : "Api Title";
  document.title = title;
  next();
});

export default router;
