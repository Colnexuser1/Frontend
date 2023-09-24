<template>
  <div>
    <div class="column-left">
      <form v-on:submit.prevent="login">
        <div class="login-form">
          <div class="image text-center">
            <img src="@/assets/logo.png">
          </div>

          <div class="text-center m-6">
            <p>Bienvenido, por favor ingrese sus datos</p>
            <p class="in-alert">{{ msg }}</p>
          </div>

          <div class="input-group">
            <label class="col-form-label" for="username">Correo Electr&oacute;nico: </label>
            <input class="form-control shadow-none" type="email" id="username" v-model="uname"
              placeholder="johndoe@example.com" required />
          </div>

          <div class="input-group">
            <label class="col-form-label" for="password">Contrase&ntilde;a: </label>
            <input class="form-control shadow-none" type="password" id="password" v-model="passwd"
              placeholder="**********" required />
            <button v-on:click.prevent="showPassword" class="btn btn-outline-secondary" type="button"
              id="button-addon2"><i class="fa-regular fa-eye"></i></button>
          </div>

          <input class="btn btn-primary" type="submit" id="submit" name="login" value="login" />

          <div class="text-center p-3">
            <a v-on:click.prevent="{ }"><b>¿Olvid&oacute; su contrase&ntilde;a?</b></a>
          </div>
        </div>
      </form>
    </div>

    <div class="column-right">
      <img src="../assets/hacker-man-laptop.png" />
    </div>
  </div>
</template>

<script>
import RequestController from "@/controllers/RequestController"
export default {
  name: 'Login',
  data() {
    return {
      uname: "",
      passwd: "",
      msg: ""
    }
  },
  methods: {
    login() {
      let json = {
        "email": this.uname,
        "password": this.passwd
      };
      RequestController.Login(json).then((data) => {
        console.log(data);
      }).catch((error) => {
        if (error.response) {
          this.msg = error;
        }
      });
    },
    showPassword() {
      let password = document.getElementById('password');
      if (password.type == "password") {
        password.type = "text";
      }
      else {
        password.type = "password";
      }
    }
  },
}
</script>

<style></style>
