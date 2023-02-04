<template>
    <div class="inicial-complete">

        <div class="row listagem">
            <h1 class="title-pagina">Rotas de aprendizagem</h1>  
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        <CardRota/>
        </div>
        <MenuComponent/>
    </div>
</template>

<script>
import MenuComponent from '@/components/MenuApp.vue'
import CardRota from '@/components/CardRota.vue'
export default {
    name: "InicialView",
    components: { MenuComponent, CardRota},
};
</script>

<style scoped>
.title-pagina{
    color: white;
    text-align: initial;
    margin-bottom: 20px;
}
.inicial-complete{
    background-color: #29303a !important;
    padding: 30px 0px 70px 0px;
    overflow-x: hidden;
}
.listagem{
    padding: 110px 40px 0px 40px;
}
@media (max-width:576px) {
    .listagem{
    padding: 0px 40px; 
}
}
</style>
