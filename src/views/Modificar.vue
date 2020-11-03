<template>
  <div id="contenedor">
    <h4>Modificar departamento</h4>
    <form v-on:submit="submitForm">
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control input-formulario"
            id="nombre"
            placeholder="Nombre"
            v-model="form.nombre"
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control input-formulario"
            id="descripcion"
            placeholder="Descripción"
            v-model="form.descripcion"
          />
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-formulario"
          id="tamanio"
          placeholder="Tamaño"
          v-model="form.tamanio"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-formulario"
          id="ubicacion"
          placeholder="Ubicación"
          v-model="form.ubicacion"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-formulario"
          id="precio"
          placeholder="Precio"
          v-model="form.precio"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            id="condiciones"
            type="text"
            class="input-formulario form-control"
            placeholder="Condiciones"
            v-model="form.condiciones"
          />
        </div>
        <div class="form-group col-md-2">
          <input
            type="text"
            placeholder="Estado"
            class="form-control input-formulario"
            id="estado"
            v-model="form.estado"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import VueAxios from 'vue-axios'
let token = localStorage.getItem("token");
const url = "http://localhost:5000/api/v1/departamento/";

export default {
  name: "Modificar",
  data() {
    return {
      form: {
        id: "",
        nombre: "",
        descripcion: "",
        tamanio: "",
        ubicacion: "",
        precio: "",
        condiciones: "",
        estado: true,
      },
    };
  },
  methods: {
    submitForm(){
      axios.post(url, this.form, {
        headers: {
          Authorization: 'Bearer '+ token
        }
      })
      .then((result) => {
        console.log(result.data);
        //console.log("entro aqui");
      })
      .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
#contenedor {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
}

h4 {
  margin-bottom: 20px;
}

.input-formulario::placeholder {
  color: rgb(212, 212, 212);
}
</style>