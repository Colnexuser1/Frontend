<template>
  <div class="border-top">
    <div class="maintitle px-4 mt-2">
      <h1>Reporte de actividades</h1>
    </div>
    <div class="modal" tabindex="-1" id="activityModal" data-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Creaci&oacute;n de Reportes</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ msg }}</p>
            <div class="row">
              <div class="total-row form-group">
                <label for="title">Titulo:</label>
                <input v-model="title" class="form-control shadow-none" type="text" id="title" required>
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="description">Descripción:</label>
                <textarea v-model="description" id="description" class="form-control shadow-none"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="date">Fecha en que se realiza:</label>
                  <b-form-datepicker v-model="date" class="form-control shadow-none" date-format-options="{day:'numeric',month:'numeric',year:'numeric'}" locale="es" id="date"></b-form-datepicker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="time">Duración en horas:</label>
                  <input type="number" v-model="hours" class="form-control shadow-none" id="time">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="project">Nombre del proyecto:</label>
                <input type="text" v-model="project" class="form-control shadow-none" id="project">
              </div>
            </div>
            <div class="row">
              <div class="total-row form-group">
                <label for="stage">Seleccione una etapa:</label>
                <select v-model="stage" class="form-select shadow-none" aria-label="Default select example" id="stage">
                  <option v-for="stage in stagelist">{{ stage }}</option>
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
        <form class="d-flex" role="search" v-on:click.prevent="">
          <input class="form-control me-2 shadow-none" type="search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
    <div class="table-contain">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Fecha creaci&oacute;n</th>
            <th scope="col">Descripci&oacute;n</th>
            <th scope="col">horas</th>
            <th scope="col">Actividad</th>
            <th scope="col">Etapa</th>
            <th scope="col">Proyecto</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reportlist">
            <th scope="row">{{ report.date }}</th>
            <td>{{ report.description }}</td>
            <td>{{ report.hours }}</td>
            <td>{{ report.title }}</td>
            <td>{{ report.stage }}</td>
            <td>{{ report.projectname }}</td>
            <td><a><i class="fa-solid fa-pen"></i></a></td>
            <td><a href="#" v-on:click.prevent="deletereport(report)"><i class="fa-solid fa-trash"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example" class="pagination-nav">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item" v-for="item in pageitemlist">
          <a class="page-link">{{ item }}</a>
        </li>
        <li class="page-item">
          <a class="page-link">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
      title: "",
      description: "",
      date: "",
      hours: "",
      project: "",
      stage: "",
      msg: "",
      reportlist: this.$parent.reportlist,
      stagelist: this.$parent.stageslist,
      pageitemlist: this.$parent.pageitemlist
    }
  },
  methods: {
    deletereport(report) {
      this.reportlist.splice(this.reportlist.indexOf(report));
    }
  }
}
</script>

<style>
.table-contain {
  overflow: auto;
  max-height: 380px;
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
  border: none;
}

.total-row {
  padding: 12px;
}

.b-calendar .b-calendar-grid {
  padding: 8px;
}
</style>