<template>
  <div class="border-top">
    <div class="maintitle px-4 mt-3">
      <h1>Reporte de actividades</h1>
    </div>
    <div class="modal" tabindex="-1" id="activityModal" data-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <form class="" v-on:click.prevent="" novalidate>
            <div class="modal-header">
              <h5 class="modal-title">{{ opccrud }} de Actividades</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                v-on:click="resetcrud()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="total-row form-group form-check has-validation">
                  <label for="title">Nombre de la actividad:</label>
                  <input v-model="form.title" class="form-control shadow-none" type="text" id="title"
                    aria-describedby="inputGroupPrepend" required>
                  <div class="valid-feedback">
                    ¡Se ve bien!
                  </div>
                  <div class="invalid-feedback">
                    Por favor, elije un nombre de usuario.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="description">Descripción de la actividad:</label>
                  <textarea v-model="description" id="description" class="form-control shadow-none" required></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="date">Fecha en que se realiza:</label>
                    <b-form-datepicker placeholder="" :min="min" v-model="date" class="form-control shadow-none"
                      :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }" locale="es"
                      id="date"></b-form-datepicker>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="time">Duración en horas:</label>
                    <input type="number" v-model="hours" class="form-control shadow-none" id="time" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="project">Nombre del proyecto:</label>
                  <vue-bootstrap-typeahead v-model="project" class="shadow-none" id="project" :data="projectlist" />
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="stage">Seleccione una etapa:</label>
                  <select v-model="stage" class="form-select shadow-none" aria-label="Default select example" id="stage"
                    required>
                    <option v-for="stage in stagelist">{{ stage }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                v-on:click="resetcrud()">Cerrar</button>
              <button type="submit" class="btn btn-primary" v-on:click="processcrud()">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="left-options">
        <button type="submit" class="btn btn-primary btn-create" data-bs-toggle="modal" data-bs-target="#activityModal"
          v-on:click="opccrud = 'Creación'">
          <i class="fa-solid fa-plus"></i> Crear actividad
        </button>
      </div>
      <div class="right-search nav">
        <form class="d-flex" role="search" v-on:click.prevent="">
          <input class="form-control me-2 shadow-none" type="search" v-model="searchinput" aria-label="Search">
          <button class="btn btn-primary" type="submit" v-on:click="searchdata(searchinput)">Buscar</button>
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
            <td><a href="#" data-bs-toggle="modal" data-bs-target="#activityModal" v-on:click.prevent="datedit(report)">
                <i class="fa-solid fa-pen"></i>
              </a></td>
            <td><a href="#" v-on:click.prevent="deletereport(report)">
                <i class="fa-solid fa-trash"></i>
              </a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav v-if="reportlist.length > 0 && pageitemlist.length > 0" aria-label="Page navigation example"
      class="pagination-nav">
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
    const today = new Date();
    const mindate = new Date(today);
    mindate.setDate(mindate.getDate() - 3);
    return {
      title: "",
      description: "",
      date: "",
      hours: "",
      actitemreport: null,
      project: "",
      searchinput: "",
      stage: "",
      opccrud: "",
      reportlist: this.$parent.reportlist,
      stagelist: this.$parent.stageslist,
      pageitemlist: this.$parent.pageitemlist,
      projectlist: this.$parent.projectlist
    }
  },
  methods: {
    searchdata(data) {
      if (this.projectlist.includes(data)) {
        console.log(this.projectlist[this.projectlist.indexOf(data)]);
      } else if (this.stagelist.includes(data)) {
        console.log(this.stagelist[this.stagelist.indexOf(data)]);
      }
      searchinput = "";
    },
    deletereport(report) {
      this.reportlist.splice(this.reportlist.indexOf(report));
    },
    datedit(report) {
      this.actitemreport = report;
      this.opccrud = 'Modificación';
      let index = this.reportlist.indexOf(report);

      this.title = this.reportlist[index].title;
      this.description = this.reportlist[index].description;
      this.date = this.reportlist[index].date;
      this.hours = this.reportlist[index].hours;
      this.project = this.reportlist[index].projectname;
      this.stage = this.reportlist[index].stage;
    },
    resetcrud() {
      this.title = "";
      this.description = "";
      this.date = "";
      this.hours = "";
      this.project = "";
      this.stage = "";
    },
    processcrud() {
      if (this.title == "" || this.description == "" || this.date == "" || this.hours == "" || this.project == "" || this.stage == "") {
        console.log("Por favor rellene todos los campos");
      } else if (!this.projectlist.includes(this.project)) {
        console.log("Por favor ingrese un proyecto válido");
      } else {
        if (this.opccrud == "Creación") {
          this.reportlist.push({
            title: this.title,
            description: this.description,
            date: this.date,
            hours: this.hours,
            projectname: this.project,
            stage: this.stage
          })
        } else if (this.opccrud == "Modificación") {
          let index = this.reportlist.indexOf(this.actitemreport);
          this.reportlist[index].title = this.title;
          this.reportlist[index].description = this.description;
          this.reportlist[index].date = this.date;
          this.reportlist[index].hours = this.hours;
          this.reportlist[index].projectname = this.project;
          this.reportlist[index].stage = this.stage;
        }
        this.resetcrud();
      }
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
  width: 500px;
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
  box-shadow: none;
}
</style>