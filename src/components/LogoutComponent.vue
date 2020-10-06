<template>
  <div class="logoutComponent">
      <button class="logout" @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "LogoutComponent",
  methods: {
    logout () {
      if (localStorage.getItem('token') !== null) {
        localStorage.removeItem('token');
        this.$router.push({ name: 'Login' })
        alert('Esperamos vuelvas pronto');
      }
    }
  }
}
</script>

<style scoped>
.logout {
  cursor: pointer;
  margin-left: 5px;
  padding: 10px;
  background: #ff0000;
  color: white #ff0000;
  border-radius: 6px;
}
</style>
