import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/view/Home";
import About from "../src/view/About";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});
console.log(router);
export default router;
