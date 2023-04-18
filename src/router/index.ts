import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuard,
} from "vue-router";
import Login from "../views/Login.vue";
import Plans from "../views/Plans.vue";
import Registration from "../views/Registration.vue";
import Home from "../views/Home.vue";

const authGuard: NavigationGuard = (to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token) {
    next({ path: "/" });
  } else {
    next();
  }
};

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
  {
    path: "/home",
    name: "HomePage",
    component: Home,
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
