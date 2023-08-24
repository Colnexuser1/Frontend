<template>
    <div class="container">
    <h1>
      Login Form
    </h1>
    <form v-on:submit.prevent="login">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model="uname" placeholder="johndoe@example.com" />
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="passwd" placeholder="**********" />
      <input type="submit" id="submit" name="login" value="login"/>
    </form>
    <p>{{  msg }}</p>
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
form {
  margin: 0 auto;
  padding: 22px;
}

form>* {
  display: block;
  margin: 10px auto;
}

</style>
