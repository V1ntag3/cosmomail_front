import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrarView from "@/views/RegistrarView.vue"
import InicialView from "@/views/InicialView.vue"
import EnvidasView from "@/views/EnviadasView.vue"
const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/registrar",
    name: "RegistrarView",
    component: RegistrarView,
  },
  {
    path: "/inicial",
    name: "InicialView",
    component: InicialView,
  },
  {
    path: "/enviadas",
    name: "EnvidasView",
    component: EnvidasView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;