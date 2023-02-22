<template>
    <div class="registrar-complete">
        <div class="container-image-registrar">

        </div>

        <div class="container-registrar">
            <img class="logo-email" src="./../assets/img/a-email.svg" alt="" srcset="">
            <div class="row">
                <h1 class="titulo-tela">
                    Se Registrar
                </h1>
                <router-link :to="{ name: 'LoginView' }">
                    <img class="botao-voltar" src="../assets/img/botao-de-seta-para-a-esquerda-do-teclado.svg" alt="">
                </router-link>
            </div>

            <div>
                <form action="">

                    <div class="sub-container-form">
                        <label for="name" class="form-label label-text">Nome</label>
                        <input id="name" type="name" class="form-control" v-model="nome" maxlength="27">
                        <span class="error-text" v-if="erros.nome">Campo Inválido</span>
                    </div>
                    <div class="sub-container-form">
                        <label for="email" class="form-label label-text">Email</label>
                        <input id="email" type="email" class="form-control" autocomplete="username" v-model="email">
                        <span class="error-text" v-if="erros.email">Campo Inválido</span>
                        <span class="error-text" v-if="erros.registrar">Email já cadastrado</span>
                    </div>
                    <div class="sub-container-form">
                        <label for="telefone" class="form-label label-text">Telefone</label>
                        <input id="telefone" type="telefone" class="form-control" v-model="telefone" v-maska
                            data-maska="(##) # #### - ####">
                        <span class="error-text" v-if="erros.telefone">Campo Inválido</span>
                    </div>
                    <div class="sub-container-form">
                        <label for="senha" class="form-label label-text">Senha</label>
                        <input id="senha" type="password" class="form-control" autocomplete="current-password"
                            v-model="senha">
                        <span class="error-text" v-if="erros.senha">Campo Inválido</span>
                    </div>
                    <div class="sub-container-form">
                        <label for="confirmar-senha" class="form-label label-text">Confirmar Senha</label>
                        <input id="confirmar-senha" type="password" class="form-control" autocomplete="current-password"
                            v-model="confirmar_senha">
                        <span class="error-text" v-if="erros.confirmar_senha">Campo Inválido</span>
                        <span class="error-text" v-if="erros.senha_diferentes">Senhas não coincidem</span>
                    </div>
                </form>
                <button class="btn" @click="validarRegistrar()">Registrar</button>


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
import { vMaska } from "maska"

async function registrar(config) {
    try {
        var r = await axios(config)
            .then(function (response) {
                console.log(response)
                return true
            })
            .catch(function (response) {
                console.log(response.response.data)
                if (response.response.data == 'Email já utilizado') {
                    return null
                }
                return false
            });
        return r;
    } catch (e) {
        return null
    }
}
export default {
    name: "RegistrarView",
    components: {},
    directives: { maska: vMaska },
    data() {
        return {
            nome: "",
            email: "",
            telefone: "",
            confirmar_senha: "",
            senha: "",
            erros: {
                nome: false,
                email: false,
                telefone: false,
                confirmar_senha: false,
                senha: false,
                registrar: false,
                senha_diferentes: false
            }
        }
    },
    methods: {
        async validarRegistrar() {
            var isValid = true

            // Nome
            if (this.nome == "") {
                isValid = false
                this.erros.nome = true
            } else {
                this.erros.nome = false
            }

            // Email
            if (this.email == "") {
                isValid = false
                this.erros.email = true
            } else {
                this.erros.email = false
            }

            // Telefone
            if (this.telefone == "") {
                isValid = false
                this.erros.telefone = true
            } else {
                this.erros.telefone = false
            }

            // Senha
            if (this.senha == "") {
                isValid = false
                this.erros.senha = true
            } else {
                this.erros.senha = false
            }

            // Confirmar Senha
            if (this.confirmar_senha == "") {
                isValid = false
                this.erros.confirmar_senha = true
            } else {
                this.erros.confirmar_senha = false
            }
            // Validar Senhas
            if (this.confirmar_senha != "" && this.senha != "") {
                if (this.confirmar_senha != this.senha) {
                    isValid = false
                    this.erros.senha_diferentes = true
                } else {
                    this.erros.senha_diferentes = false
                }
            }

            if (isValid) {
                var data = JSON.stringify({
                    "email": this.email,
                    "senha": this.senha,
                    "telefone": this.telefone,
                    "nome": this.nome,

                });

                var config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: http + 'usuario/registrar',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: data
                };


                var resposta = await registrar(config)
          
                if (resposta == true) {
                    this.$router.push('/')
                }
                else {
                    if (resposta == null) this.erros.registrar = true
                }
            }
        }
    }
};
</script>

<style scoped>
.container-image-registrar {
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
    margin: 10px auto;
    width: 70px;
    margin-bottom: 0px;
}

.botao-voltar {
    position: absolute;
    width: 30px;
    right: 27px;
    top: 90px;
}

.botao-voltar:hover {
    opacity: 0.5;
    cursor: pointer;
}

.container-registrar {

    width: 30%;
    height: 100%;
    background-color: #302e2e;
    padding: 0px 30px 40px 30px;
    color: white;
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
}

.sub-container-form {
    margin-top: 20px;
    margin-bottom: 20px;
}

.container-registrar input {
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

.container-registrar button {
    color: white;
    width: 100%;
    height: 45px;
    background-color: #4596e7;
    margin: 10px 0px;
    font-weight: 900;
    border-radius: 0px;
}

.container-registrar button:hover {
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
    .container-registrar {
        width: 46%;
    }
}

@media (max-width:768px) {
    .container-image-registrar {
        display: none;
    }

    .container-registrar {
        margin: 28.5px auto;
        width: 400px;
        position: unset;
        border-radius: 20px;
        -webkit-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
        height: 770px;
    }

    .registrar-complete {

        background: linear-gradient(207deg, #5c6260, #212c28, #65586f, #5d3c77);
        background-size: 800% 800%;
        background: linear-gradient(247deg, #69716f, #1f3932, #adadad);
        background-size: 600% 600%;
        -webkit-animation: AnimationName 8s ease infinite;
        -moz-animation: AnimationName 8s ease infinite;
        animation: AnimationName 8s ease infinite;
        width: 100%;
        height: 100%;
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

    .botao-voltar {
        position: relative;
        right: -155px;
        top: -45px;
    }
}

@media (max-width:576px) {
    .botao-voltar {
        position: absolute;
        right: 30px;
        top: 90px;

    }

    .container-registrar {
        width: 100%;
        margin: 0px;
        border-radius: 0px;
        height: -webkit-fill-available;
    }

    .container-redes-sociais {
        width: 100%;
    }

    html {
        height: 100%;
    }
}
</style>
