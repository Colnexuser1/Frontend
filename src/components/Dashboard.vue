<template>
  <div class="d-flex flex-column">
    <nav class="navbar bg-body-tertiary navbar-expand-lg" id="navbar">
      <div class="container-fluid justify-content-start">
        <div class="m-0">
          <div class="navbar-brand">
            <img src="../assets/logo.png" width="140">
          </div>
        </div>
        <!--div class="m-0">
          <span>Hola {{ username }}!</span>
          <p class="nav-text">Bienvenido nuevamente.</p>
        </div-->
      </div>
      <div class="container-fluid justify-content-end">
        <div class="dropdown p-3">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-bell"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">No tienes notificaciones</li>
          </ul>
        </div>
        <div class="dropdown p-3">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver como
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">Mi perfil</li>
            <li class="dropdown-divider"></li>
            <li class="dropdown-item">Usuario 1</li>
            <li class="dropdown-item">Usuario 2</li>
          </ul>
        </div>
        <div class="m-0">
          <a class="navbar-brand">
            <img class="avatar-rounded" src="../assets/avatar.jpg" width="40" height="40">
          </a>
        </div>
      </div>
    </nav>

    <div class="wrapper-dock">
      <div class="sidebar">
        <ul>
          <a href="#"><li>Dashboard</li></a>
          <a href="#"><li>Actividades</li></a>
        </ul>
        <div class="logout">
          <ul>
            <a href="#"><li>Cerrar sesión</li></a>
          </ul>
        </div>
      </div>

      <div class="container-dock">
        <router-view></router-view>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
  :root {
    --nav-height: 200px;
  }

  .sidebar ul li {
    padding: 10px 5px;
}

  .logout {
    height: fit-content;
    padding: 40px 0;
  }

  .logout * {
    margin: 0 auto;
  }

  .wrapper-dock {
    display: flex;
    flex-grow: 1;
  }

  .container-dock {
    flex: 1;
  }

  .sidebar {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f8f9fa;
    border-right: 1px solid #dbdbdb;
  }
</style>
