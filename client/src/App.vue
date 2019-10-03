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
  },
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    async getMessage() {
      const token = await this.$auth.getTokenSilently();
      console.log(token);
      const response = await fetch("/api/restricted", {
        Authorization: `Bearer ${token}`
      });
      console.log(await response.json());
    }
  },
  mounted() {
    this.getMessage();
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
