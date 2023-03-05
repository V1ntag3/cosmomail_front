<template>
  <!-- Main Sidebar Container -->


  <aside class="main-sidebar sidebar-dark-primary">

    <!-- Brand Logo -->
    <div class="brand-link">
      <span class="brand-text font-weight-light">
        <img style="width: 25px;" src="./../assets/img/planet.svg" alt="" srcset=""> CosmoMail</span>
    </div>
    <div class="close-menu" data-widget="pushmenu">
      <img src="./../assets/img/close.svg" alt="">
    </div>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3">
        <div class="user">
          <span class="user-letter">{{ fistLetter }}</span>
        </div>
        <div class="info">
          <p class="paragrafo-data">{{ nome }}</p>
          <p class="paragrafo-data">{{ telefone }}</p>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">

            <ul class="nav nav-treeview">
              <li class="nav-item">
                <div @click="closeMenu(); this.$router.push('/inicial') " class="nav-link">
                  <img src="../assets/img/inbox.svg" alt="" srcset="">
                  <p>Inbox</p>
                </div>
              </li>

              <li class="nav-item">
                <div @click="closeMenu(); this.$router.push('/enviadas')" class="nav-link">
                  <img src="../assets/img/bate-papo.svg" alt="">
                  <p>Enviadas</p>
                </div>
              </li>

              <li class="nav-item">
                <div @click="closeMenu(); this.$router.push('/enviar_mensagem')" class="nav-link">
                  <img src="../assets/img/send.svg" alt="" srcset="">
                  <p>Enviar Mensagem</p>
                </div>
              </li>


            </ul>
            <ul class="nav nav-treeview nav-footer">
              <li class="nav-item">
                <div @click="closeMenu(); this.$router.push('/configuracoes')" class="nav-link">
                  <img src="../assets/img/settings.svg" alt="" srcset="">
                  <p>Configurações</p>
                </div>
              </li>

              <li class="nav-item">
                <div class="nav-link" @click="logout()">
                  <img src="../assets/img/logout.svg" alt="">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Logout</p>
                </div>
              </li>
            </ul>
          </li>

        </ul>

      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <div class="botao-abrir-fechar-menu" data-widget="pushmenu">
    <img src="../assets/img/menu.svg" alt="">
  </div>
</template>

<script>
const http = "http://localhost:8080/"
const axios = require('axios');



export default {
  name: "MenuApp",
  props: {},
  data() {
    return {
      fistLetter: "",
      nome: "",
      telefone: "",
    }
  },
  methods: {
    async verificarToken(token, data) {
      var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: http + 'usuario/update',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: data
      };
      try {
        var r = await axios(config)
          .then(function () {
            return true
          })
          .catch(function (error) {

            if (error.response.status == 401) {
              localStorage.removeItem('telefone')
              localStorage.removeItem('email')
              localStorage.removeItem('nome')
              localStorage.removeItem('token')
              localStorage.removeItem('id')
              this.$router.push('/')
            }
            setTimeout(() => {
              this.verificarToken()
            }, 40000);
            return error.response.status
          });
        if (r == 401) {
          this.$router.push('/')
        }
        return r;
      } catch (e) {
        return null
      }
    },
    logout() {
      localStorage.removeItem('nome')
      localStorage.removeItem('telefone')
      localStorage.removeItem('email')
      localStorage.removeItem('id_email')
      localStorage.removeItem('token')
      this.$router.push("/")
    },
    closeMenu() {
      setTimeout(() => {
        if (window.innerWidth < 992) {
          document.querySelector('body').classList.remove('sidebar-open')
          document.querySelector('body').classList.add("sidebar-closed")
          document.querySelector('body').classList.add("sidebar-collapse")
        }
      }, 20);

    }
  },
  created() {
    this.telefone = localStorage.getItem('telefone')
    this.nome = localStorage.getItem('nome')
    this.fistLetter = this.nome[0]
    var token = localStorage.getItem('token')
    if (token == null || token == "") {
      this.$router.push('/')
    } else {
      var data = JSON.stringify({
        'id': localStorage.getItem('id')
      })
      this.verificarToken(token, data).then()


    }
    this.closeMenu()
  },
};
</script>

<style scoped>
.nav-link {
  text-align: left;
}

.paragrafo-data {
  margin: 0px;
  color: white;
  word-wrap: break-word;
}

.brand-link {
  color: #fff;
}

.info {
  display: block;
  padding: 0px;
}

.navfooter {
  position: absolute;
  bottom: 0px;
}

.nav-link img {
  width: 22px;
  margin-right: 15px;
}

.close-menu {
  position: absolute;
  top: 13px;
  left: 217px;
  display: none;
}

.close-menu:hover {
  opacity: 0.5;
  cursor: pointer;

}

.user-panel {
  text-align: center;
  padding: 0px 10px;
}

.user {
  text-align: center;
  width: 50px;
  height: 50px;
  background-color: rgb(89, 91, 241);
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 15px;
}

.nav-link {
  cursor: pointer;
  padding-left: 13px;
}

.user-letter {
  font-size: 31px;
  font-weight: 800;
  color: white;
}

aside {
  z-index: 100;
}

.botao-abrir-fechar-menu {
  top: 35px;
  left: 0px;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  z-index: 99;
  cursor: pointer;
}

.botao-abrir-fechar-menu img {
  width: 22px;
  margin-top: 9px;
  margin-right: 5px;
}

@media (max-width:992px) {
  .close-menu {
    display: block;
  }
}

body:not(.layout-fixed) .main-sidebar {

  position: fixed;

}

@media (max-width:768px) {}

@media (max-width:576px) {}
</style>
