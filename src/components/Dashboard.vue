<template>
  <div>
    <nav class="navbar bg-body-tertiary navbar-expand-lg">
      <div class="container-fluid justify-content-start">
        <div class="m-0">
          <div class="navbar-brand">
            <img src="../assets/logo.png" width="125">
          </div>
        </div>
        <div class="m-0">
          <span>Hola {{ username }}!</span>
          <p class="nav-text">Bienvenido nuevamente.</p>
        </div>
      </div>
      <div class="container-fluid justify-content-end">
        <div class="m-0 dropdown p-6">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-bell"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item">No tienes notificaciones</a></li>
          </ul>
        </div>
        <div class="dropdown m-0 p-3">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver como
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mi perfil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Usuario 1</a></li>
            <li><a class="dropdown-item" href="#">Usuario 2</a></li>
          </ul>
        </div>
        <div class="m-0">
          <a class="navbar-brand">
            <img class="avatar-rounded" src="../assets/avatar.jpg" width="40" height="40">
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: "Usuario"
    }
  }
}
</script>

<style>
  .avatar-rounded {
    border-radius: 50%;
  }

  .nav-text {
    margin: 0;
  }
</style>
