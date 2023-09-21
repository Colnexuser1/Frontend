<template>
  <div class="d-flex flex-column">
    <nav class="navbar bg-body-tertiary navbar-expand-lg" id="navbar">
      <div class="container-fluid justify-content-start">
        <div class="m-0">
          <div class="navbar-brand">
            <img src="../assets/logo.png" width="140">
          </div>
        </div>
      </div>
      <div class="container-fluid justify-content-end">
        <div class="dropdown p-3">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-bell"></i>
          </a>
          <ul class="dropdown-menu">
            <li v-if="notificationlist.length == 0" class="dropdown-item">No tienes notificaciones</li>
            <div v-else>
              <li class="border-bottom" v-for="notification in notificationlist">{{ notification }}</li>
            </div>
          </ul>
        </div>
        <div class="dropdown p-3">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver como
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">Mi perfil</li>
            <li class="dropdown-divider"></li>
            <li v-for="user in userslist" class="dropdown-item">{{ user }}</li>
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
          <li></li>
          <a href="" v-on:click.prevent="$router.push('/')">
            <li class="sidebar-item">
              <i class="fa-solid fa-house"></i> Dashboard
            </li>
          </a>
          <a href="" v-on:click.prevent="$router.push('/report')">
            <li class="sidebar-item">
              <i class="fa-solid fa-chart-line"></i> Actividades
            </li>
          </a>
          <a href="" v-on:click.prevent="$router.push('/proyect')">
            <li class="sidebar-item">
             <i class="fa-solid fa-list-check"></i> Proyectos
            </li>
          </a>
        </ul>
        <div class="logout">
          <ul>
            <a>
              <li class="sidebar-item">
                <i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div class="container-dock">
        <div class="figure-content d-flex">
          <figure>
            <img src="../assets/decorador.png">
          </figure>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      userslist: this.$parent.users,
      reportlist: this.$parent.reports,
      stageslist: this.$parent.stages,
      pageitemlist: this.$parent.pageitems,
      notificationlist: this.$parent.notifications,
      projectlist: this.$parent.projects,
      proyects: this.$parent.proyect
    }
  }
}
</script>

<style>
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
}</style>
