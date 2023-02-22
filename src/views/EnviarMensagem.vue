<template>
    <MenuApp />
    <div style="    padding-top: 30px;    " class="content-wrapper">
        <div style="padding: 0px;" class="col-12">
            <div style="padding: 0px;" class="col-12 col-sm-6 part-1">
                <h1 style="margin-top: -10px;">Envidas</h1>
            </div>
            <div style="padding: 0px;" class="col-12 col-sm-6 part-2">
                <button @click="deletarMensagens()" class="btn btn-danger">Deletar</button>
            </div>
        </div>


        <button class="btn enviar-mensagem">
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
    name: "EnvidasView",
    components: {
        MenuApp
    },
    data() {
        return {
            corpo:"",
            assunto: "",
            destinatario: "",
        }
    },
    methods: {
 

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

    .content-wrapper {
        padding-left: 25px;
    }
}
</style>
    