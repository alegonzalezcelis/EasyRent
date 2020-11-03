<template>
  <div class="home">
    <h2>Bienvenido {{ nameUser }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Departamento />
    <!-- <Agregar/> -->
    <!-- <EditDepartamento/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Departamento from "@/components/Departamento.vue";
// import EditDepartamento from "@/components/EditDepartamento.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Departamento,

    // EditDepartamento
  },
  data () {
    return {
      nameUser: ''
    }
  },
  mounted () {
    this.nameUser = localStorage.getItem('nameUser')
  }
}
</script>

<style scoped>
  @import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
</style>
