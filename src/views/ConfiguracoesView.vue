<template>
    <MenuApp />
    <div style="padding-top: 30px;padding-left: 55px;" class="content-wrapper">
        <div style="padding: 0px;" class="col-12">
            <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
                <h1 style="margin-top: -10px;">Configurações</h1>
            </div>
            <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
                <button style="margin-right: 10px;" v-if="editar == false" @click="editar = true"
                    class="btn btn-secondary">Editar</button>
                <button style="margin-right: 10px;" v-if="editar == true" @click="salvarDados()"
                    class="btn btn-primary">Salvar</button>
                <button style="margin-right: 10px;" @click="deletarUsuario()" class="btn btn-danger">Deletar</button>

            </div>
        </div>

        <div style="padding: 0px;" class="row">
            <div style="padding: 0px;margin-top: 15px; display: contents; text-align: left;" class="col-12">
                <div class="col-12 col-md-5 col-lg-5 col-xl-5">
                    <label for="email" class="form-label label-text">Email</label>
                    <input disabled id="email" class="form-control" type="text" v-model="email">
                    <span class="error-text" v-if="erros.destinatario">Campo Inválido</span>
                </div>

                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <label for="nome" class="form-label label-text">Nome*</label>
                    <input :disabled="!editar" id="nome" class="form-control" type="text" v-model="nome" maxlength="27">
                    <span class="error-text" v-if="erros.nome">Campo Inválido</span>
                </div>

                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <label for="telefone" class="form-label label-text">Telefone*</label>
                    <input :disabled="!editar" id="telefone" class="form-control" type="text" v-model="telefone" v-maska
                        data-maska="(##) # #### - ####">
                    <span class="error-text" v-if="erros.telefone">Campo Inválido</span>
                </div>

                <div v-if="editar == true" class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <label for="senha" class="form-label label-text">Senha*</label>
                    <input :disabled="!editar" id="senha" class="form-control" type="text" v-model="senha">
                    <span class="error-text" v-if="erros.senha">Campo Inválido</span>
                </div>

                <div v-if="editar == true" class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <label for="confirmar_senha" class="form-label label-text">Confirmar Senha*</label>
                    <input :disabled="!editar" id="confirmar_senha" class="form-control" type="text"
                        v-model="confirmarSenha">
                    <span class="error-text" v-if="erros.confirmarSenha">Campo Inválido</span>
                </div>

            </div>

        </div>

        <button class="btn enviar-mensagem" @click="this.$router.push('/enviar_mensagem')">
            <img src="../assets/img/lapis.svg" alt="">
        </button>
    </div>
</template>
    
<script>
import MenuApp from '@/components/MenuApp.vue';
import { vMaska } from "maska"

const http = "http://localhost:8080/"
const axios = require('axios');

export default {
    name: "ConfiguracoesView",
    components: {
        MenuApp
    },
    directives: { maska: vMaska },
    data() {
        return {
            editar: false,
            nome: "",
            email: "",
            telefone: "",
            senha: "",
            confirmarSenha: "",
            erros: {
                nome: false,
                email: false,
                telefone: false,
                senha: false,
                confirmarSenha: false
            }
        }
    },
    created() {

        this.nome = localStorage.getItem('nome')
        this.email = localStorage.getItem('email')
        this.telefone = localStorage.getItem('telefone')

    },
    methods: {
        async deletarUsuario() {
            var token = localStorage.getItem('token')
            var config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: http + 'usuario/delete/' + localStorage.getItem('id_email'),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            try {

                var r = await axios(config)
                    .then(function (response) {
                        localStorage.removeItem('telefone')
                        localStorage.removeItem('email')
                        localStorage.removeItem('nome')
                        localStorage.removeItem('token')
                        localStorage.removeItem('id')

                        console.log(response)
                        return true
                    })
                    .catch(function (error) {
                        return false
                    });
                if (r) this.$router.push('/')
                return r;
            } catch (e) {
                return null
            }
        },
        async salvarDados() {
            var isValid = true
            var id = localStorage.getItem('id_email')
            var token = localStorage.getItem('token')
            var data = {
                id: id
            }
            if (this.nome != "") {
                data.nome = this.nome
                this.erros.nome = false

            } else {
                isValid = false
                this.erros.nome = true
            }


            if (this.telefone != "") {
                data.telefone = this.telefone
                this.erros.telefone = false
            } else {
                isValid = false

                this.erros.telefone = true
            }

            if ((this.senha != "" && this.confirmarSenha != "") && this.senha == this.confirmarSenha) {
                data.senha = this.senha
                this.erros.senha = false
                this.erros.confirmarSenha = false
            } else {
                isValid = false

                this.erros.senha = true
                this.erros.confirmarSenha = true
            }

            if (isValid) {
                var config = {
                    method: 'put',
                    maxBodyLength: Infinity,
                    url: http + 'usuario/update',
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
                            localStorage.removeItem('telefone')
                            localStorage.removeItem('email')
                            localStorage.removeItem('nome')
                            localStorage.removeItem('token')
                            localStorage.removeItem('id')

                            console.log(response)
                            return true
                        })
                        .catch(function (error) {
                     
                            return false
                        });
                    if (r) this.$router.push('/')
                    return r;
                } catch (e) {
                    return null
                }
            }

        }
    }
};
</script>
    
<style scoped>
.content-wrapper {
    height: auto;
    padding: 0px 25px;
    background-color: white;
}

.label-text {
    width: 100%;
    margin-bottom: 0px;
    text-align: left;
    font-size: 0.8rem;
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
}
</style>
    