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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
