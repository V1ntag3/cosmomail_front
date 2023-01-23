<template>
  <MenuApp />
</template>

<script>
import MenuApp from './components/MenuApp.vue'

export default {
  name: 'App',
  components: {
    MenuApp
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
@font-face {
  font-family: GoodTimes-Regular;
  src: url(./assets/fonts/goodTimesRegular.otf);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  
}
body{
  background-color: #29303a
}
</style>
