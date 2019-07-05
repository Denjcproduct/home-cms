import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { layout: "auth" },
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "auth" },
      component: () => import("./views/Register.vue")
    },
    {
      path: "/",
      name: "home",
      meta: { layout: "main" },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/categories",
      name: "categories",
      meta: { layout: "main" },
      component: () => import("./views/Categories.vue")
    },
    {
      path: "/record",
      name: "record",
      meta: { layout: "main" },
      component: () => import("./views/Record.vue")
    },
    {
      path: "/profile",
      name: "profile",
      meta: { layout: "main" },
      component: () => import("./views/Profile.vue")
    },
    {
      path: "/planning",
      name: "planning",
      meta: { layout: "main" },
      component: () => import("./views/Planning.vue")
    },
    {
      path: "/history",
      name: "history",
      meta: { layout: "main" },
      component: () => import("./views/History.vue")
    },
    {
      path: "/detail",
      name: "detail",
      meta: { layout: "main" },
      component: () => import("./views/Detail.vue")
    }
  ]
});
