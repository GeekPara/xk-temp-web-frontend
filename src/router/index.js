import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../page/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../page/login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../page/dashboard.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../page/register.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../page/account.vue"),
  },
  {
    path: "/imform/qq",
    name: "QQ",
    component: () => import("../page/inform/qq.vue"),
  },
  {
    path: "/inform/dingtalk",
    name: "Dingtalk",
    component: () => import("../page/inform/dingtalk.vue"),
  },
  {
    path: "/info/about",
    name: "About",
    component: () => import("../page/info/about.vue"),
  },
  {
    path: "/info/help",
    name: "Help",
    component: () => import("../page/info/help.vue"),
  },
  {
    path: "/info/agreement",
    name: "Agreement",
    component: () => import("../page/info/agreement.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
