<template>
  <div class="prueba-root">
    <h2>Easy Rent</h2>
    <div class="contenedor-departamentos">
      <div class="departamento">
        <div class="foto">
          <!-- Aqui deberia ir una imagen -->imagen
        </div>
        <h6>Departamento en Viña</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cumque vero et earum dignissimos enim a eveniet! Dolorum doloremque labore dolore earum, consequuntur recusandae autem? Distinctio nesciunt exercitationem aperiam soluta.</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Prueba",
    }
</script>

<style lang="scss" scoped>

.contenedor-departamentos{
    width :100%;
    height: 400px;
    background-color: burlywood;
    padding: 10px;
  }

  .departamento{
    width: 30%;
    background-color: white;
  }

  .foto{
    height: 100px;
    background-color: gray;
  }

  
</style>
