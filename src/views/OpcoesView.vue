<template>
    <div class="opcoes-complete" style="height: 100%;">
        <ul class="opcoes">
            <li class="opcao">
                <div class="form-check form-switch">
                    <label class="form-check-label" for="mode-18">Modo +18</label>
                    <input class="form-check-input" type="checkbox" id="mode-18">
                </div>
            </li>
            <router-link :to="{ name: 'LoginView' }">
            <li class="opcao">Loggout</li>
            </router-link>
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
.form-check-input:focus{
    border-color: #e686fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(253, 13, 201, 0.25);
    --bs-form-switch-bg: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e);
}
@media (max-width:576px) {
    .opcoes {
        padding: 0px 40px;
    }
}
</style>
