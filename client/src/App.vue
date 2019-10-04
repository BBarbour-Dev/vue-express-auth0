<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<script>
import navigation from "./components/layout/navigation.vue";

export default {
  name: "App",
  components: {
    navigation
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin: 2rem 0;
}
</style>
