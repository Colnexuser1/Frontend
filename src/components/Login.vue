<template>
    <div>
      <div class="column-left">
      <form v-on:submit.prevent="login">
        <div class="login-form">
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
      </div>
      </form>
    </div>
    
    <div class="column-right">
      <img src="../assets/hacker-man-laptop.png"/>
    </div>
  </div>
</template>

<script>
import RequestController from "@/controllers/RequestController"
export default {
  name: 'Login',
  data () {
    return {
      uname: "",
      passwd: "",
      msg: "",
      authtoken: ""
    }
  },
  methods: {
    login() {
      let json = {
        "username": this.uname,
        "password": this.passwd
      };
      RequestController.Login(json).then((data) => {
        if (data.data.error == false) {
          this.authtoken = data.data.message;
          window.location.href = '/';
        } else {
          this.msg = data.data.error_msg;
        }
        console.log(data)
      }).catch((error) => {
        this.msg = error;
      });
    }
  },
}
</script>

<style>
.column-right {
    flex: 1;
}

.column-left {
  margin: 0;
  width: 50%;
  height: 100%;
}

.column-right img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; 
    height: 100%;
}

.image {
  max-width: 300px;
  margin-bottom: 18px;
}
</style>
