<template>
  <div class="profile">
    <h1>Profile</h1>
  </div>
</template>

<script>
export default {
  name: "profile",
  methods: {
    async getMessage() {
      const token = await this.$auth.getTokenSilently();
      const response = await fetch("/api/restricted", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(await response.text());
    }
  },
  mounted() {
    console.log("test");
    this.getMessage();
  }
};
</script>

<style>
</style>