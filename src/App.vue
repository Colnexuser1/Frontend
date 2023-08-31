<template>
  <div id="app">
    <nav class="navbar bg-body-tertiary navbar-expand-lg">
      <div class="container-fluid justify-content-end">
        <div class="dropdown m-0 p-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div class="m-0">
          <a class="navbar-brand">
            <img class="rounded" src="./assets/avatar.jpg" width="30" height="24">
          </a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    isolation: isolate;
    width: 100vw;
    height: 100vh;
  }

  #app > div {
    width: 100%;
    height: 100%;
  }
</style>
