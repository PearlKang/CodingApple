import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List";
import Home from "./components/Home";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
