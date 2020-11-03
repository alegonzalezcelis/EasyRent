<template>
  <div class="loginComponent">
    <h1 class="title">Iniciar Sesión</h1>
    <form action class="form">
      <label class="form-label" for="#username">Usuario:</label>
      <input
        v-model="login.username"
        class="form-input"
        type="text"
        
        required
        placeholder="Username"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="login.password"
        class="form-input"
        type="password"
        placeholder="Password"
      />
      <!-- <p v-if="error" class="error">Datos incorrectos</p> -->
      <!-- <input @click="submit()" class="form-submit" type="submit" value="Login" /> -->
      <button @click="submit()" class="form-submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    nombre: String
  },
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      axios
        .post('http://localhost:5000/api/v1/Login/Login', this.login)
        .then(result => {
          const TOKEN = result.data.token
          const NAMEUSER = result.data.userName
          localStorage.setItem('token', TOKEN)
          localStorage.setItem('nameUser', NAMEUSER)
          this.$router.push({ name: 'Home' })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#prueba-h2 {
  color: #ff4a96;
}

.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
