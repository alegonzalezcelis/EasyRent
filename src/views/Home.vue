<template>
  <div class="home">
    <h2>Bienvenido {{ nameUser }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
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
