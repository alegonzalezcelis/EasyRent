<template>
  <div class="authentication">
    <Authentication :nombre="nombre"></Authentication>
  </div>
</template>

<script>
import Authentication from '@/components/Login.vue'

export default {
  components: {
    Authentication
  },
  data () {
    return {
      nombre: 'Soy Alejandro'
    }
  }
}
</script>

<style>

</style>
