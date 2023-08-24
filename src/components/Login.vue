<template>
    <div class="container">
      <div class="column-left col">
      <img src="../assets/logo.png" width="100">
      <form v-on:submit.prevent="login" class="content">
        <div>
          <p>Bienvenido, por favor ingrese sus datos</p>
          <p class="alert">{{ msg }}</p>
        </div>
        <label class="col-form-label" for="username">Username: </label>
        <input class="form-control" type="email" id="username" v-model="uname" placeholder="johndoe@example.com" required/>
        <label class="col-form-label" for="password">Password: </label>
        <input class="form-control" type="password" id="password" v-model="passwd" placeholder="**********" required/>
        <br>
        <input class="btn btn-primary" type="submit" id="submit" name="login" value="login"/>
        <div>
          <a href="#"><b>¿Olvidó su contrase&ntilde;a?</b></a>
        </div>
      </form>
    </div>
    <div class="column-right col">
      <!--div class="imagebox"></div-->
      <img src="../assets/hacker-man-laptop.png"/>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      uname: "",
      passwd: "",
      msg: ""
    }
  },
  methods: {
    login() {
      this.msg = "";1
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
      );
    }
  }
}
</script>

<style>
.container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    height: 100vh;
    margin-top: 30px;
}

.container .column-right {
    flex: 1;
}

.container .column-right img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; 
    height: 100vh;
}

.container .column-left {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container .column-left img {
  display: block;
  position: absolute;
  top: 80px;
  width: 18rem;
}
</style>
