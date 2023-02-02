import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/views/LoginView.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;