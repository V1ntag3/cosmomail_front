<template>
    <div class="registrar-complete" style="width: 100%;">
        <div class="container-image-registrar">

        </div>

        <div class="container-registrar">
            <img class="logo-waifu" src="../assets/img/wl.svg" alt="" srcset="">
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
                        <label for="nickname" class="form-label label-text">Nickname</label>
                        <input id="nickname" type="nickname" class="form-control">
                    </div>
                    <div class="sub-container-form">
                        <label for="name" class="form-label label-text">Nome</label>
                        <input id="name" type="name" class="form-control">
                    </div>
                    <div class="sub-container-form">
                        <label for="email" class="form-label label-text">Email</label>
                        <input id="email" type="email" class="form-control">
                    </div>
                    <div class="sub-container-form">
                        <label for="telefone" class="form-label label-text">Telefone</label>
                        <input id="telefone" type="telefone" class="form-control">
                    </div>
                    <div class="sub-container-form">
                        <label for="senha" class="form-label label-text">Senha</label>
                        <input id="senha" type="password" class="form-control">
                    </div>
                    <div class="sub-container-form">
                        <label for="confirmar-senha" class="form-label label-text">Confirmar Senha</label>
                        <input id="confirmar-senha" type="password" class="form-control">
                    </div>

                    <router-link :to="{ name: 'InicialView' }">
                        <button class="btn">Registrar</button>
                    </router-link>
                </form>
            </div>
            <div class="container-redes-sociais">
                <a href="https://wa.me/5586998514018" target="_blank">
                    <i class="bi bi-whatsapp icon-social"></i>
                </a>
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
export default {
    name: "RegistrarView",
    components: {},
};
</script>

<style scoped>
.container-image-registrar {
    width: 70%;
    background-image: url('../assets/img/anime-waifu.jpg');
    background-repeat: none;
    background-size: cover;
    height: 100%;
    display: inline-block;
    position: fixed;
    left: 0px;
    top: 0px;
}

.logo-waifu {
    width: 150px;
}

.botao-voltar {
    position: absolute;
    width: 30px;
    right: 27px;
    top: 165px;
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

    position: fixed;
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
    background-color: #805c83;
    margin: 10px 0px;
    font-weight: 900;
    border-radius: 0px;
}

.container-registrar button:hover {
    background-color: #805c83;
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
        margin: 90px auto;
        width: 400px;
        position: unset;
        border-radius: 20px;
        -webkit-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 0px 44px 0px rgba(0, 0, 0, 0.75);
    }

    .registrar-complete {
        background: linear-gradient(207deg, #5c6260, #212c28, #65586f, #5d3c77);
        background-size: 800% 800%;
        background: linear-gradient(247deg, #69716f, #1f3932, #adadad);
        background-size: 600% 600%;
        -webkit-animation: AnimationName 8s ease infinite;
        -moz-animation: AnimationName 8s ease infinite;
        animation: AnimationName 8s ease infinite;
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
    top: -44px;
    }
}

@media (max-width:576px) {
    .botao-voltar {
        position: absolute;
        right: 30px;
    top: 160px;

    }

    .registrar-complete {
        height: auto;

    }

    .container-registrar {
        width: 100%;
        height: 100%;
        margin: 0px;
        border-radius: 0px;
    }

    .container-redes-sociais {
        width: 100%;
    }

    html {
        height: 100%;
    }
}
</style>
