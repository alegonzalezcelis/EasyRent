<template>
  <div id="app">
    <div v-if="departamentos" class="container">
      <h3>Todos los departamentos</h3>
      <router-link to="/agregar" class="btn btn-sm btn-primary"
        >Agregar Departamento</router-link
      >
      <table class="table">
        <thead>
          <tr>
            <!-- <p>nombre : {{result.nombre}}</p> -->
            <!-- <th>Id</th> -->
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Tamaño</th>
            <th>Ubicación</th>
            <th>Precio</th>
            <th>Condiciones</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="departamento in departamentos" v-bind:key="departamento.estado">
            <!-- <td>{{ departamento.id }}</td> -->
            <td>{{ departamento.nombre }}</td>
            <td>{{ departamento.descripcion }}</td>
            <td>{{ departamento.tamanio }}</td>
            <td>{{ departamento.ubicacion }}</td>
            <td>{{ departamento.precio }}</td>
            <td>{{ departamento.condiciones }}</td>
            <td>{{ departamento.estado }}</td>
            <td>
              <button v-on:click="BorrarDepa(id)" class="btn btn-danger">Eliminar</button>
            </td>
            <td>
              <button class="btn btn-success">Actualizar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import func from '../../vue-temp/vue-editor-bridge';
// import func from "../../vue-temp/vue-editor-bridge";
let token = localStorage.getItem("token");
console.log(token);
const url = "http://localhost:5000/api/v1/departamento/";

export default {
  name: "Departamento",
  data() {
    return {
      departamentos: null,
    };
  },
  created() {
    axios
      .get(url + "listar", { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        this.departamentos = response.data;
        console.log("Departamentos", this.departamentos);
      });
  },
  methods: {
    BorrarDepa(estado){
      axios.delete(url+id).then(() => {
        window.location.reload()
        console.log(estado)
      })
    },

    // Eliminar(id){
    //   axios.put(url+id).then(() => {
    //     this.departamentos.estado = false
    //   })
    // }
  },
};
</script>

<style scoped>
.table {
  margin-top: 10px;
}
</style>
