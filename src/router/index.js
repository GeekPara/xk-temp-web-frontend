import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    // 主页，产品介绍等
    path: "/",
    name: "Home",
    component: () => import("../page/index.vue"),
  },
  {
    // 登录页
    path: "/login",
    name: "Login",
    component: () => import("../page/login.vue"),
  },
  {
    // 登录后用户控制台
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../page/dashboard.vue"),
  },
  {
    // 注册体温打卡服务
    path: "/register",
    name: "Register",
    component: () => import("../page/register.vue"),
  },
  {
    // 用户信息，可修改个人信息
    path: "/account",
    name: "Account",
    component: () => import("../page/account.vue"),
  },
  {
    // QQ通知绑定及管理
    path: "/imform/qq",
    name: "QQ",
    component: () => import("../page/inform/qq.vue"),
  },
  {
    // 钉钉加群二维码
    path: "/inform/dingtalk",
    name: "Dingtalk",
    component: () => import("../page/inform/dingtalk.vue"),
  },
  {
    // 关于页面
    path: "/info/about",
    name: "About",
    component: () => import("../page/info/about.vue"),
  },
  {
    // 帮助页面
    path: "/info/help",
    name: "Help",
    component: () => import("../page/info/help.vue"),
  },
  {
    // 许可条款
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
