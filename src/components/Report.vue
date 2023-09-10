<template>
  <div class="border-top">
    <div class="modal" tabindex="-1" id="activityModal" data-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Creaci&oacute;n de actividades</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="total-row form-group">
                <label for="title">Titulo:</label>
                <input class="form-control shadow-none" type="text" id="title" required>
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="description">Descripción:</label>
                <input class="form-control shadow-none" type="text" id="description">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="date">Fecha en que se realiza:</label>
                  <date-picker v-model="date" @dp-hide="doSomethingOnHide" @dp-change="doSomethingOnChange"
                    id="date"></date-picker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="time">Duración en horas:</label>
                  <input type="number" class="form-control" id="time">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="project">Seleccione un proyecto:</label>
                <select class="form-select shadow-none" aria-label="Default select example" id="project">
                  <option selected>Seleccionar</option>
                  <option value="1">Cargos Fijos</option>
                  <option value="2">Desembolsos digitales</option>
                  <option value="3">Reporte de Actividades</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="stage">Seleccione una etapa:</label>
                <select class="form-select shadow-none" aria-label="Default select example" id="stage">
                  <option selected>Seleccionar</option>
                  <option value="1">Desarrollo</option>
                  <option value="2">Pruebas</option>
                  <option value="3">Analisis</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="left-options">
        <button type="submit" class="btn btn-primary btn-create" data-bs-toggle="modal" data-bs-target="#activityModal">
          <i class="fa-solid fa-plus"></i> Crear actividad
        </button>
      </div>
      <div class="right-search nav">
        <form class="d-flex" role="search">
          <input class="form-control me-2 shadow-none" type="search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
    <div class="table-contain">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Fecha creación</th>
            <th scope="col">horas</th>
            <th scope="col">Actividad</th>
            <th scope="col">Etapa</th>
            <th scope="col">Proyecto</th>
            <th></th>
            <th></th>
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
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example" class="pagination-nav">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Report"
}
</script>

<style>
.table-contain {
  overflow: auto;
  max-height: 450px;
}

.right-search {
  width: 450px;
  margin: 25px;
}

.left-options {
  margin: auto 25px;
  width: 100%;
}

.pagination-nav {
  margin-right: 35px;
}

.total-row {
  padding: 12px;
}
</style>