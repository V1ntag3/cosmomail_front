<template>

    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/anime-waifu.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardRota",
    props: {},
};
</script>

<style scoped>
.card {
    margin: 0px auto 20px auto;
    padding: 0px;
    cursor: pointer;
}
.card:hover{
    opacity: 0.5;
}

.card-text {
    font-weight: 300;
}

@media (max-width:992px) {}

@media (max-width:768px) {}

@media (max-width:576px) {}
</style>
