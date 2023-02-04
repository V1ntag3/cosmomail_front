<template>
    <div class="opcoes-complete" style="height: 100%;">
        <ul class="opcoes">
            <li class="opcao">
                <div class="form-check form-switch">
                    <label class="form-check-label" for="mode-18">Modo +18</label>
                    <input class="form-check-input" type="checkbox" id="mode-18">
                </div>
            </li>
            <a href="/">
            <li class="opcao">Loggout</li>
        </a>
        </ul>
        <MenuComponent />

    </div>
</template>

<script>
import MenuComponent from '@/components/MenuApp.vue'
export default {
    name: "OpcoesView",
    components: { MenuComponent },
};
</script>

<style scoped>
.opcoes-complete {
    background-color: #29303a !important;
    padding: 30px 0px 70px 0px;
    overflow-x: hidden;
}

.opcoes-complete ul {
    list-style: none;
    padding: 0px 40px;
}

.opcoes {
    padding: 110px 40px 0px 40px;
}

.opcao {
    height: 50px;
    background-color: white;
    color: black;
    padding: 13px 15px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 15px;
}

.opcao input,
.opcao label {
    display: inline-flex;
    margin: 0px;
    padding: 0px;
}
.form-switch{
    padding: 0px;
}
.opcao label {
    float: left;
    width: 80%;
}

.opcao input {
    float: right;
}

#mode-18 {
    width: 45px;
    height: 25px
}

.opcao:hover,
.opcao label:hover {
    cursor: pointer;
}
.form-check-input:checked {
    background-color: #e90dfd;
    border-color: #fd0de9;
}
@media (max-width:576px) {
    .opcoes {
        padding: 0px 40px;
    }
}
</style>
