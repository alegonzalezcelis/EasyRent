import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Authentication from "../views/Authentication.vue";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Authentication,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
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

// router.beforeResolve((to, from, next) => {
//   if(to.name !== 'Login' ){
//     const obtainToken = localStorage.getItem('token')
//     if (obtainToken) {
//       next({name: 'home'})
//     }else{
//       next({name: 'login'})
//     }
//   }else {
//     next()
//   }

// })


// Protección de Ruta
router.beforeEach((to, from, next) => {
  const session = (localStorage.getItem('token') !== null) ? true : false;
  if (to.name === 'Login' && session) next({ name: 'Home' })
  else if (to.name !== 'Login' && !session) next({ name: 'Login' })
  else {
    next();
  }
});

// Posible Logout

// const router = new VueRouter({ 
//   routes: [ 
//       { 
//           path: '/login', 
//           component: LoginView, 
//           beforeEnter: (to, from, next) => { 
//               delete localStorage.token;
//               next();  
//           } 
//       } 
//   ] 
// });

export default router;
