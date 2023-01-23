<template>
  <div class="menu">
    <div class="item" href="">
      <img class="item-icon" src="../assets/img/home.svg" alt="" srcset="" />
    </div>
    <div id="menu-title" class="item" href="">WAIFU LEARN</div>
    <div class="item" href="">
      <img class="item-icon" src="../assets/img/options.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuApp",
  props: {},
};
</script>

<style scoped>
.menu {
  background-color: rgb(41, 40, 41);
  position: fixed;
  bottom: 0px;
  height: 70px;
  width: 100%;
  -webkit-box-shadow: -13px 46px 93px 30px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -13px 46px 93px 30px rgba(0, 0, 0, 0.75);
  box-shadow: -13px 46px 93px 30px rgba(0, 0, 0, 0.75);
}

.item {
  width: calc(98% / 3);
  color: #fff;
  font-size: 22px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
}
.item:hover{
  opacity: 0.2;
}
.item-icon {
  margin: 20px auto 0px auto;
}
#menu-title{
  font-family: GoodTimes-Regular;
  margin-bottom: 10px;
}
</style>
