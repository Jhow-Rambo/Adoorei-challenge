import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Plans from "../views/Plans.vue";
import Registration from "../views/Registration.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/plans",
    name: "plans",
    component: Plans,
  },
  {
    path: "/user-registration",
    name: "userRegistration",
    component: Registration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
