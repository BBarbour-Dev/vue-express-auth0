<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
      <li>
        <button v-if="$auth.isAuthenticated" @click="logout">Log Out</button>
        <button v-else @click="login">Login</button>
      </li>
    </ul>
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

<style scoped>
a:visited {
  color: inherit;
}

ul {
  list-style-type: none;
}

li {
  padding: 0.5rem;
  display: inline;
}

button {
  color: inherit;
  border: none;
  background-color: none;
  background: none;
  padding: 0;
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
  display: inline;
}
</style>
