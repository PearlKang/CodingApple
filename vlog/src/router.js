import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home";
import List from "./components/List";
import Detail from "./components/Detail";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
