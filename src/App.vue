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

body {
  height: 100%;
  width: 100%;
}

html {
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

.error-text {
  color: rgb(255, 72, 72);
  font-size: 14px;
  width: 100%;
  display: block;
  text-align: initial;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 991.98px) and (min-width:768px) {

body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .content-wrapper,
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-footer,
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-header {
  transition: margin-left .3s ease-in-out;
  margin-left: 250px;
}
}

</style>
