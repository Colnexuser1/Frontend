<template>
    <div class="container">

      <div class="column-left">
      <form v-on:submit.prevent="login">

        <div class="image text-center">
          <img src="../assets/logo.png">
        </div>

        <div class="text-center m-6">
          <p>Bienvenido, por favor ingrese sus datos</p>
          <p class="in-alert">{{ msg }}</p>
        </div>

        <div class="input-group">
          <label class="col-form-label" for="username">Correo Electr&oacute;nico: </label>
          <input class="form-control" type="email" id="username" v-model="uname" placeholder="johndoe@example.com" required/>
        </div>

        <div class="input-group">
          <label class="col-form-label" for="password">Contrase&ntilde;a: </label>
          <input class="form-control" type="password" id="password" v-model="passwd" placeholder="**********" required/>
        </div>

        <input class="btn btn-primary" type="submit" id="submit" name="login" value="login"/>
        
        <div class="text-center p-3">
          <a v-on:click.prevent="{}"><b>¿Olvid&oacute; su contrase&ntilde;a?</b></a>
        </div>

      </form>
    </div>
    
    <div class="column-right">
      <img src="../assets/hacker-man-laptop.png"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      uname: "",
      passwd: "",
      msg: ""
    }
  },
  methods: {
    login() {
      this.msg = "";
      let json = {
          "username": this.uname,
          "password": this.passwd
      };
      axios.post('https://2e1f-186-116-210-138.ngrok-free.app/login', json).then(
        data => {
          if (data.data.error == false) {
            this.msg = data.data.message;
          } else {
            this.msg = data.data.error_msg;
          }
        }
      ).catch(error => {
        this.msg = "Error: Servidor no encontrado";
      });
    }
  }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.column-right {
    flex: 1;
}

.column-right img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; 
    height: 100vh;
}

.image {
  max-width: 300px;
  margin-bottom: 18px;
  margin-top: 35%;
}
</style>
