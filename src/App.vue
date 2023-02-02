<template>
  <LoginView />
</template>

<script>

import LoginView from './views/LoginView.vue';

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  transition: 0.5s;
  text-decoration: none;
}
html {
  width: 100%;
  height: 100%;
}
body {
  height: 100%;
  width: 100%;
}
a{
  color: white;
}
a:link{
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
  width: 100%;
}


/* background-color: white; */


@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 94%
  }

  50% {
    background-position: 100% 7%
  }

  100% {
    background-position: 0% 94%
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 94%
  }

  50% {
    background-position: 100% 7%
  }

  100% {
    background-position: 0% 94%
  }
}

@-o-keyframes AnimationName {
  0% {
    background-position: 0% 94%
  }

  50% {
    background-position: 100% 7%
  }

  100% {
    background-position: 0% 94%
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 94%
  }

  50% {
    background-position: 100% 7%
  }

  100% {
    background-position: 0% 94%
  }
}
</style>
