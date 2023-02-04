import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import InicialView from "@/views/InicialView.vue";
import OpcoesView from "@/views/OpcoesView.vue"
import RegistrarView from "@/views/RegistrarView.vue"
const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/inicial",
    name: "InicialView",
    component: InicialView,
  },
  {
    path: "/opcoes",
    name: "OpcoesView",
    component: OpcoesView,
  },
  {
    path: "/registrar",
    name: "RegistrarView",
    component: RegistrarView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;