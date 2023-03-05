<template>
  <div class="login-complete">
    <div class="container-image-login">

    </div>

    <div class="container-login">

      <img class="logo-email" src="./../assets/img/planet.svg" alt="" srcset="">
      <h1 class="titulo-tela">
        Login
      </h1>
      <div>
        <form action="">
          <div class="sub-container-form">
            <label for="email" class="form-label label-text">Email</label>
            <input id="email" type="email" class="form-control" v-model="email" autocomplete="username">
            <span class="error-text" v-if="erros.email">Campo Inválido</span>
          </div>
          <div class="sub-container-form">
            <label for="senha" class="form-label label-text">Senha</label>
            <input id="senha" type="password" class="form-control" v-model="senha" autocomplete="current-password">
            <span class="error-text" v-if="erros.senha">Campo Inválido</span>
            <span class="error-text" v-if="erros.logar">Email/Senha Inválido(s)</span>
          </div>

          <!-- <div class="link">
            <a href="#"> Esqueci a senha?</a>
          </div> -->

        </form>
        <button class="btn" @click="validarLogar()">Login</button>

        <router-link :to="{ name: 'RegistrarView' }">
          <button class="btn">Registrar</button>
        </router-link>
      </div>
      <div class="container-redes-sociais">
        <a href="https://github.com/V1ntag3" target="_blank">
          <i class="bi bi-github icon-social"></i>
        </a>
        <a href="https://www.instagram.com/m.vi.r13/" target="_blank">
          <i class="bi bi-instagram icon-social"></i>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
const http = "http://localhost:8080/"
const axios = require('axios');


export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      email: "",
      senha: "",
      erros: {
        email: false,
        senha: false,
        logar: false
      }
    }
  },
  methods: {
    async logar(config) {
      try {
        var r = await axios(config)
          .then(function (response) {
            localStorage.setItem("email", response.data.email)
            localStorage.setItem("nome", response.data.nome)
            localStorage.setItem("telefone", response.data.telefone)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("id_email", response.data.id)
            return true
          })
          .catch(function (error) {

            return false
          });
        if (r) {
          this.$router.push('/inicial')
        } else {
          this.erros.logar = true
        }
        return r;
      } catch (e) {
        return null
      }
    },
    validarLogar() {

      var isValid = true
      if (this.email == "") {
        this.erros.email = true
        isValid = false
      } else {
        this.erros.email = false
      }

      if (this.senha == "") {
        this.erros.senha = true
        isValid = false
      } else {
        this.erros.senha = false
      }
      if (isValid) {

        var data = JSON.stringify({
          "email": this.email,
          "senha": this.senha
        });

        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: http + 'usuario/login',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          data: data
        };


        this.logar(config)
      }
    }
  }
};
</script>

<style scoped>
.container-image-login {
  width: 70%;
  background-image: url('../assets/img/negocios.jpg');
  background-repeat: none;
  background-size: cover;
  height: 100%;
  display: inline-block;
  position: fixed;
  left: 0px;
  top: 0px;
  background-position: center;
}

.logo-email {
  margin: 40px auto;
  width: 70px;
}

.container-login {
  width: 30%;
  height: 100%;
  background-color: #302e2e;
  padding: 0px 30px 40px 30px;
  color: white;
  display: inline-block;

  position: fixed;
  top: 0px;
  right: 0px;
}

.sub-container-form {
  margin-top: 20px;
  margin-bottom: 20px;
}

.container-login input {
  height: 45px;
  border: none;
  border-radius: 0px;
}

.titulo-tela {
  color: white;
  font-size: 40px;
  font-weight: 900;
  width: fit-content;
}

.container-login button {
  color: white;
  width: 100%;
  height: 45px;
  background-color: #4596e7;
  margin: 10px 0px;
  font-weight: 900;
  border-radius: 0px;
}

.container-login button:hover {
  opacity: 0.5;
}

.label-text {
  width: 100%;
  margin-bottom: 0px;
  text-align: left;
  font-size: 0.8rem;
}

.link {
  width: 100%;
  text-align: initial;
  color: white;
}

a:hover {
  opacity: 0.5;
}

.icon-social {
  display: inline-block;
  width: unset;
  /* width: ; */
}

.icon-social i {
  width: 40px;
}

.container-redes-sociais i:hover {
  opacity: 0.5;
  cursor: pointer;
}

.container-redes-sociais {
  text-align: center;

}

.container-redes-sociais i {
  margin: 0px 10px;
  font-size: 2rem;
}

@media (max-width:992px) {
  .container-login {
    width: 46%;
  }
}

@media (max-width:768px) {
  .container-image-login {
    display: none;
  }

  .container-login {
    margin: 45px auto;
    width: 400px;
    height: 680px;
    ;
    position: unset;
    border-radius: 20px;
    -webkit-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
  }

  .login-complete {
    background: linear-gradient(207deg, #5c6260, #212c28, #65586f, #5d3c77);
    background-size: 800% 800%;
    background: linear-gradient(247deg, #69716f, #1f3932, #adadad);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 82%
    }

    50% {
      background-position: 100% 19%
    }

    100% {
      background-position: 0% 82%
    }
  }

  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 82%
    }

    50% {
      background-position: 100% 19%
    }

    100% {
      background-position: 0% 82%
    }
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 82%
    }

    50% {
      background-position: 100% 19%
    }

    100% {
      background-position: 0% 82%
    }
  }
}

@media (max-width:576px) {
  .container-login {
    width: 100%;
    height: 100%;
    margin: 0px;
    border-radius: 0px;
  }

  .container-redes-sociais {
    position: fixed;
    bottom: 15px;
    width: 100%;
    left: 0px;
  }

  html {
    height: 100%;
  }
}
</style>
