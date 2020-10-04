import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Authentication from "../views/Authentication.vue";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Authentication,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Home") {
    console.log("Voy a home");
    if (localStorage.getItem("token") === null) next({ name: "Login" });
    next();
  }
  next();
});

export default router;
