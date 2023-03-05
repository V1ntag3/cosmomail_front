import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrarView from "@/views/RegistrarView.vue"
import InicialView from "@/views/InicialView.vue"
import EnvidasView from "@/views/EnviadasView.vue"
import EnviarMensagemView from "@/views/EnviarMensagemView.vue"
import ConfiguracoesView from "@/views/ConfiguracoesView.vue"
import MensagemView from "@/views/MensagemView.vue"
import EnviarMensagemRespView from "@/views/MensagemView.vue"
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
  },
  {
    path: "/enviar_mensagem",
    name: "EnviarMensagemView",
    component: EnviarMensagemView,
  },
  {
    path: "/enviar_mensagem/:id",
    name: "EnviarMensagemRespView",
    component: EnviarMensagemView,
  },
  {
    path: "/configuracoes",
    name: "ConfiguracoesView",
    component: ConfiguracoesView,
  },
  {
    path: "/mensagem/",
    name: "MensagemView",
    component: MensagemView,
  },
  {
    path: "/mensagem/:id",
    name: "MensagemView",
    component: MensagemView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;