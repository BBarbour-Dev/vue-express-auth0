<template>
  <div id="nav">
    <router-link to="/">Home|</router-link>
    <router-link to="/about">About|</router-link>
    <router-link to="/profile">Profile|</router-link>
    <button v-if="!$auth.isAuthenticated" @click="login">Login</button>
    <button v-if="$auth.isAuthenticated" @click="logout">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>