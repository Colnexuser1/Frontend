<template>
  <div class="border-top">
    <div class="d-flex justify-content-end">
      <div class="right-search nav">
        <form class="d-flex" role="search">
          <input class="form-control me-2 shadow-none" type="search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Fecha creación</th>
          <th scope="col">horas</th>
          <th scope="col">Actividad</th>
          <th scope="col">Etapa</th>
          <th scope="col">Proyecto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2023-04-14 20:12</th>
          <td>8</td>
          <td>PADXXXXXX</td>
          <td>Desarrollo</td>
          <td>Proyecto XX</td>
          <td><i class="fa-solid fa-pen"></i></td>
          <td><i class="fa-solid fa-trash"></i></td>
          <td><i class="fa-solid fa-paper-plane"></i></td>
        </tr>
        <tr>
          <th scope="row">2023-04-14 20:12</th>
          <td>8</td>
          <td>PADXXXXXX</td>
          <td>Desarrollo</td>
          <td>Proyecto XX</td>
          <td><i class="fa-solid fa-pen"></i></td>
          <td><i class="fa-solid fa-trash"></i></td>
          <td><i class="fa-solid fa-paper-plane"></i></td>
        </tr>
        <tr>
          <th scope="row">2023-04-14 20:12</th>
          <td>8</td>
          <td>PADXXXXXX</td>
          <td>Desarrollo</td>
          <td>Proyecto XX</td>
          <td><i class="fa-solid fa-pen"></i></td>
          <td><i class="fa-solid fa-trash"></i></td>
          <td><i class="fa-solid fa-paper-plane"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Actividades"
  }
</script>

<style>
  .right-search {
    width: 300px;
    margin: 25px;
  }
</style>