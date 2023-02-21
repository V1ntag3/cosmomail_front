<template><!-- Main Sidebar Container -->


  <aside class="main-sidebar sidebar-dark-primary">
  
    <!-- Brand Logo -->
    <a href="/inicial" class="brand-link">
      <span class="brand-text font-weight-light">Mail</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="user">
          <span class="user-letter">{{ }}</span>
        </div>
        <div class="info">
          <a href="#" class="d-block">Nome da pessoa</a>
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
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Enviadas</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Lixeira</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Enviar Mensagem</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Configurações</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <img src="../assets/img/logout.svg" alt="">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </li>

        </ul>

      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <div class="botao-abrir-fechar-menu">
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
            console.log(error.response.status)
            if (error.response.status == 401) return null
            return false
          });
        return r;
      } catch (e) {
        return null
      }
    }
  },
  created() {
    var token = localStorage.getItem('token')
    if (token == null || token == "") {
      this.$router.push('/')
    } else {
      var data = JSON.stringify({
        'id': localStorage.getItem('id')
      })
      if (this.verificarToken(token, data) == null) {
        this.$router.push('/')
      }

    }

  },
};
</script>

<style scoped>
.nav-link{
  text-align: left;
}
.nav-link img{
  width: 22px;
  margin-right: 5px;
}
.user {
  width: 50px;
  height: 50px;
  background-color: rgb(89, 91, 241);
}

.user-letter {
  font-size: 35px;
  color: white;
}
aside{
  z-index: 100;
}
.botao-abrir-fechar-menu {
  top: 40px;
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
.botao-abrir-fechar-menu img{
  width: 22px;
    margin-top: 9px;
    margin-right: 5px;
}
@media (max-width:992px) {}

@media (max-width:768px) {}

@media (max-width:576px) {}
</style>
