<template>
  <div class="menu">
    <div class="item" href="">
      <a href="/inicial">
      <img class="item-icon" src="../assets/img/home.svg" alt="" srcset="" />
    </a>
    </div>
    <div id="menu-title" class="item" href="">WAIFU LEARN</div>
    <div class="item" href="">
    <a href="/opcoes">
      <img class="item-icon" src="../assets/img/options.svg" alt="" />
    </a>
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
  top: 30px;
  left: calc(50% - 150px);
  height: 70px;
  width: 300px;
  box-shadow: -13px 46px 93px 30px rgb(0 0 0 / 75%);
  border-radius: 40px;
  z-index: 10000;
}

.item {
  width: calc(98% / 3);
  color: #fff;
  font-size: 22px;
  display: inline-block;
  cursor: pointer;
}

.item:hover {
  color: rgb(194, 0, 194);
  opacity: 0.5;
}

.item-icon {
  margin: -35px auto 0px auto
}

#menu-title {
  font-family: GoodTimes-Regular;
  margin-bottom: 10px;
}

@media (max-width:992px) {}

@media (max-width:768px) {}

@media (max-width:576px) {
  .menu {
    background-color: rgb(41, 40, 41);
    position: fixed;
    top: unset;
    bottom: 0px;
    height: 70px;
    width: 100%;
    border-radius: 0px;
    right: unset;
    left: 0px;
  }

}
</style>
