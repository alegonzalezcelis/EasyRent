<template>
  <div class="home">
    <h2>Bienvenido {{ nameUser }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Prueba />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Prueba from "@/components/Prueba.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Prueba
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
