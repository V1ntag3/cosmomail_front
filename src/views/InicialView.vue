<template>
  <MenuApp />
  <div style="    padding-top: 30px;     padding-left: 55px;" class="content-wrapper">
    <div style="padding: 0px;" class="col-12">
      <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
        <h1 style="margin-top: -10px;">Inbox</h1>
      </div>
      <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
        <button v-if="mensagens.length != 0" @click="deletarMensagens()" class="btn btn-danger">Deletar</button>
      </div>
    </div>
    <table class="table table-hover table-striped">
      <tbody>
        <div class="container-nenhuma-mensagem" v-if="mensagens.length == 0">
          <img class="imagem-nenhuma-mensagem" src="../assets/img/nenhuma_mensagem_encontrada.png" alt="" srcset="">
          <p style="font-size: 20px;">Nenhuma Mensagem Encontrada</p>
        </div>
        <div v-for="(men, index) in mensagens" :key="index" class="card-mensagem">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 item-card"><input type="checkbox" name="" id=""
              v-model="men.deletar"></div>
          <div @click="this.$router.push('/mensagem/' + men.id)"
            class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 item-card"><span class="title-item">De:</span> {{
              men.nome_remetente }}</div>
          <div @click="this.$router.push('/mensagem/' + men.id)"
            class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 item-card"><span class="title-item">Assunto:</span> {{
              men.assunto }}</div>
          <div @click="this.$router.push('/mensagem/' + men.id)"
            class="col-12 col-sm-2 col-md-3 col-lg-3 col-xl-3 item-card">{{ men.data }}</div>
        </div>

      </tbody>
    </table>

    <button @click="this.$router.push('/enviar_mensagem')" class="btn enviar-mensagem">
      <img src="../assets/img/lapis.svg" alt="">
    </button>
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
      mensagens_deletar: []
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
              var data_data = new Date(data[index].data);
         
              data[index].data = data_data.toLocaleDateString('pt-BR', { timeZone: 'UTC' }) + " às " + data[index].data_time;
              data[index].deletar = false
            }
            return data
          })
          .catch(function (error) {
        
            return error.response.status
          });
        if (r == 401) {
          this.$router.push('/')
        }
        if (this.mensagens != r) this.mensagens = r;
        setTimeout(() => {
          this.getMensagens()
        }, 40000);
        return r;
      } catch (e) {
        return null
      }
    },
    mensagensParaDeletar() {
      var mensagens = this.mensagens
      for (const key in mensagens) {

        if (mensagens[key].deletar) {

          this.mensagens_deletar.push(mensagens[key].id)
        }
      }

    },
    async deletarMensagens() {
      this.mensagensParaDeletar()

      var data = {
        "mensagens":this.mensagens_deletar ,
        "apagado_destinatario": true
      }
      var token = localStorage.getItem('token')

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: http + 'mensagem/delete',
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
          
            return true
          })
          .catch(function (error) {
     
            return error.response.status
          });
        if (r == 401) {
          this.$router.push('/')
        }
        if(r == true){
          this.getMensagens()
        }
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

.title-item {
  font-weight: 900;
}

.imagem-nenhuma-mensagem {
  width: 80%;
  max-width: 400px;
}

.part-1,
.part-2 {
  display: inline-block;
  min-height: 40px;

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
  margin-top: 10px;
  background-color: #f2f2f2;
  border-radius: 15px;

}

.card-mensagem:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 31%);
  -moz-box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 31%);
  box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 31%);
}

.item-card {
  display: inline-block;
}

tbody {
  padding: 0px 20px;
}

.enviar-mensagem:active {
  background-color: #6c757d;
}

@media (min-width: 576px) and (max-width:992px) {
  .content-wrapper {
    padding-left: 60px
  }
}

@media (max-width: 576px) {
  .part-1 {
    text-align: center;
  }

  .part-2 button {
    float: unset;
    margin: 0px auto;
  }

  .card-mensagem:hover {
    box-shadow: none;
  }

  .content-wrapper {
    padding-left: 25px !important;
  }

}
</style>
  