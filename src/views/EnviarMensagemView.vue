<template>
    <MenuApp />
    <div style="  padding-top: 30px;     padding-left: 55px;" class="content-wrapper">
        <div style="padding: 0px;" class="col-12">
            <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
                <h1 style="margin-top: -10px;">Enviar Mensagem</h1>
            </div>
            <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
                <button @click="validarMensagem()" id="enviar" style="margin-left: 10px;"
                    class="btn btn-secondary">Enviar</button>
                <button @click="descartar()" class="btn btn-danger">Descartar</button>

            </div>
        </div>
        <div style="padding: 0px;" class="container">
            <div style="padding: 0px;margin-top: 15px;" class="col-12">

                <label for="destinatario" class="form-label label-text">Destinatário*</label>
                <input id="destinatario" class="form-control" type="text" v-model="destinatario">
                <span class="error-text" v-if="erros.destinatario">Campo Inválido</span>

                <label for="assunto" class="form-label label-text">Assunto*</label>
                <input id="assunto" class="form-control" type="text" v-model="assunto">
                <span class="error-text" v-if="erros.assunto">Campo Inválido</span>

                <label for="corpo" class="form-label label-text">Corpo*</label>
                <textarea style="min-height: 42vh;" id="corpo" class="form-control" v-model="corpo"></textarea>
                <span class="error-text" v-if="erros.corpo">Campo Inválido</span>
            </div>
        </div>
    </div>
</template>
    
<script>

import MenuApp from '@/components/MenuApp.vue';

const http = "http://localhost:8080/"
const axios = require('axios');

export default {
    name: "EnviarMensagemView",
    components: {
        MenuApp
    },
    created() {
        this.resposta = this.$route.params.id
        this.assunto = this.$route.params.assunto
        this.corpo = this.$route.params.corpo
    },
    data() {
        return {
            resposta: null,
            corpo: "",
            assunto: "",
            destinatario: "",
            erros: {
                corpo: false,
                assunto: false,
                destinatario: false
            }
        }
    },
    methods: {
        descartar() {
            this.corpo = ""
            this.assunto = ""
            this.destinatario = ""
            this.erros.corpo = false
            this.erros.assunto = false
            this.erros.destinatario = false
        },
        validarMensagem() {
            var isValid = true

            // Destinatario
            if (this.destinatario == "" || this.destinatario == localStorage.getItem('email')) {
                isValid = false
                this.erros.destinatario = true
            } else {
                this.erros.destinatario = false
            }

            // Corpo
            if (this.corpo == "") {
                isValid = false
                this.erros.corpo = true
            } else {
                this.erros.corpo = false
            }

            // Assunto
            if (this.assunto == "") {
                isValid = false
                this.erros.assunto = true
            } else {
                this.erros.assunto = false
            }

            if (isValid) {
                this.enviarMensagem()
            }
        }
        ,
        async enviarMensagem() {
            var nome = localStorage.getItem('nome')
            var id = localStorage.getItem('id_email')
            var token = localStorage.getItem('token')
            var data = {
                'resposta': this.resposta,
                'remetente_id': id,
                'assunto': this.assunto,
                'corpo': this.corpo,
                'email_destinatario': this.destinatario,
                'nome_remetente': nome
            }
            var config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: http + 'mensagem/enviar',
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
                if (r == true) {
                    this.$router.push('/enviadas')
                }

            } catch (e) {
                return null
            }
        },

    }
};
</script>
    
<style scoped>
.label-text {
    width: 100%;
    margin-bottom: 0px;
    text-align: left;
    font-size: 0.8rem;
}

.content-wrapper {
    height: auto;
    padding: 0px 25px;
    background-color: white;
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

.enviar-mensagem:active {
    background-color: #6c757d;
}


@media (min-width: 576px) and (max-width:992px) {
    .content-wrapper {
        padding-left: 60px
    }
}

@media (max-width: 576px) {
    #enviar {
        margin-right: 10px;
    }

    .part-2 button {
        float: unset;
        margin: 0px auto;
    }

    .enviar-mensagem:hover {
        box-shadow: none;
    }

    .part-1 {
        text-align: center;
    }

    .content-wrapper {
        padding-left: 25px !important;
    }
}
</style>
    