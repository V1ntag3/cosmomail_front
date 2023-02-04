<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import './assets/fonts/fonts-GoodTimes.css';
@import './assets/fonts/fonts-Poppins.css';
* {
  margin: 0px;
  padding: 0px;
  transition: 0.5s;
  text-decoration: none;
}
body{
  height: 100%;
  width: 100%;
}
html{
  height: 100%;
  width: 100%;
}
a {
  color: white;
}

a:link {
  text-decoration: none;
}

.color1 {
  color: #000000;
}

.color2 {
  color: #032541;
}

.color3 {
  color: #125d96;
}

.color4 {
  color: #1e9ef7;
}

.color5 {
  color: #1ce6ff;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}


/* background-color: white; */


</style>
