<template>
  <MenuApp />
  <div style="    padding-top: 30px;     padding-left: 55px;" class="content-wrapper">
    <div style="padding: 0px;" class="col-12">
      <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
        <h1 style="margin-top: -10px;">Inbox</h1>
      </div>
      <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
        <button @click="deletarMensagens()" class="btn btn-danger">Deletar</button>
        <button class="btn btn btn-secondary btn-enviar">Enviar Mensagem</button>


      </div>
    </div>
    <table class="table table-hover table-striped">
      <tbody>
        <div v-for="(men,index) in mensagens" :key="index" class="card-mensagem">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 item-card"><input type="checkbox" name="" id=""
              v-model="men.deletar"></div>
          <div class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 item-card">{{ men.nome_destinatario }}</div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 item-card">{{ men.assunto }}</div>
          <div class="col-12 col-sm-2 col-md-3 col-lg-3 col-xl-3 item-card">{{ men.data }}</div>
        </div>

      </tbody>
    </table>


  </div>
</template>
  
<script>
//   const http = "http://localhost:8080/"
//   const axios = require('axios');
import MenuApp from '@/components/MenuApp.vue';

const http = "http://localhost:8080/"
const axios = require('axios');

export default {
  name: "InicialView",
  components: {
    MenuApp
  },
  data() {
    return {
      mensagens: [],
      mensagens_deletar:[]
    }
  },
  created() {

    this.getMensagens()

  },
  methods: {
    async getMensagens() {

      var id = localStorage.getItem('id_email')
      var token = localStorage.getItem('token')

      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: http + 'mensagem/recebidas/' + id,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      };
      try {

        var r = await axios(config)
          .then(function (response) {

            var data = response.data.mensagens
            
            for (let index = 0; index < data.length; index++) {
              data[index].deletar = false
            }
            return data
          })
          .catch(function (error) {
            console.log(error.response.status)
            return false
          });
        this.mensagens = r;
        return r;
      } catch (e) {
        return null
      }
    },
    mensagensParaDeletar() {
      var mensagens = this.mensagens
      for (const key in mensagens) {

        if (mensagens[key].deletar) {

          console.log("aqui")
  
          this.mensagens_deletar.push(mensagens[key].id)
        }
      }

    },
    async deletarMensagens() {
      var mensagens = this.mensagensParaDeletar()
      var data = { 'mensagens': this.mensagens_deletar}
      var token = localStorage.getItem('token')
      console.log(JSON.stringify(mensagens))
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: http + 'mensagem/delete' ,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: JSON.stringify(data)
      };
      try {

        var r = await axios(config)
          .then(function (response) {
            console.log(response)
          window.location.reload()
            return true
          })
          .catch(function (error) {
            console.log(error.response.status)
            return false
          });
        this.mensagens = r;
        return r;
      } catch (e) {
        return null
      }
    },
  }
};
</script>
  
<style scoped>
.content-wrapper {
  height: auto;
  padding: 0px 25px;
  background-color: white;
}

.part-1,
.part-2 {
  display: inline-block;
}

.part-1 {
  text-align: initial;
  margin-top: -10px;
}

.part-2 button {

  float: right;
}

.part-2 {
  padding-top: 15px;
}

.btn-enviar {
  margin-right: 15px;
}

.card-mensagem {
  padding: 15px 20px;
  margin-top: 20px;
  background-color: #f2f2f2;
  border-radius: 15px;

}

.card-mensagem:hover {
  cursor: pointer;
  -webkit-box-shadow: -18px -2px 95px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -18px -2px 95px 5px rgba(0, 0, 0, 0.75);
  box-shadow: -18px -2px 95px 5px rgba(0, 0, 0, 0.75);
}

.item-card {
  display: inline-block;
}

tbody {
  padding: 0px 20px;
}

@media (max-width: 576px) {
  .part-1 {
    text-align: center;
  }
}</style>
  