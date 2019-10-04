<template>
  <div class="profile">
    <h1>Profile</h1>
    <p v-if="message">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "profile",
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    async getMessage() {
      const token = await this.$auth.getTokenSilently();
      const response = await fetch("/api/restricted", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const json = await response.json();
      this.message = json.message;
    }
  },
  mounted() {
    this.getMessage();
  }
};
</script>

<style>
</style>