<template>
    <MenuApp />
    <div style="  padding-top: 30px;     padding-left: 55px;" class="content-wrapper">
        <div style="padding: 0px;" class="col-12">
            <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
                <h1 style="margin-top: -10px;">Mensagem</h1>
            </div>
            <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
                <button v-if="isdest" @click="this.$router.push('/enviar_mensagem/' + this.resposta)" class="btn btn-secondary botao-responder">Responder</button>

            </div>
        </div>
        <div style="padding: 0px;" class="container">

            <div class="email">
                <div class="destinatario">
              
                    <span > <span class="title-item">Para:</span> {{ nome_destinatario }} - {{ email_destinatario }}</span>
                </div>
                <div class="assunto">
                    <span class="title-item">Assunto:</span> {{ assunto }} <span v-if="isResposta"> - <span>Resposta</span> </span>
                </div>
                <div class="corpo">
                    {{ corpo }}
                </div>
            </div>

        </div>


    </div>
</template>
    
<script>

import MenuApp from '@/components/MenuApp.vue';

const http = "http://localhost:8080/"
const axios = require('axios');

export default {
    name: "MensagemView",
    components: {
        MenuApp
    }, methods: {
        async getMensagem() {

            var token = localStorage.getItem('token')

            var config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: http + 'mensagem/' + this.currentMensagem,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            try {

                var r = await axios(config)
                    .then(function (response) {
            
                        return response.data
                    })
                    .catch(function (error) {
                        console.log(error.response.status)
                        return error.response.status
                    });
                if(r == 401){
                    this.$router.push('/')
                }
                this.assunto = r.assunto

                this.corpo = r.corpo
                this.resposta = r.resposta
                this.nome_destinatario = r.nome_destinatario
                this.email_destinatario = r.email_destinatario

                if (this.email_destinatario == localStorage.getItem('email')) {
                    this.isdest = true
                }
          
                if(r.resposta > 0){
                    this.isResposta = true
                }
                return r;
            } catch (e) {
                return null
            }
        }
    },
    created() {

        this.currentMensagem = this.$route.params.id

        if (this.email_destinatario == localStorage.getItem('email')) {
            this.isdest = true
        }

        this.getMensagem()
    }
    ,
    data() {
        return {
            resposta:null,
            isdest: false,
            currentMensagem: "",
            isResposta: false,
            corpo: "",
            assunto: "",
            nome_destinatario: "",
            email_destinatario: "",
        }
    },

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

.email {
    margin-top: 15px;
    padding: 10px 15px;
    text-align: left;
    background: rgb(214, 214, 214);
    border-radius: 15px;
}

@media (min-width: 576px) and (max-width:992px) {
    .content-wrapper {
        padding-left: 60px
    }
}

@media (max-width: 576px) {
    .botao-responder {
        margin-right: 15px;
    }

    .part-2 button {
        float: none;

        text-align: center;
    }

    .part-1 {
        text-align: center;
    }

    .content-wrapper {
        padding-left: 25px !important;
    }
}
</style>
    