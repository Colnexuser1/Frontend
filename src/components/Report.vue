<template>
  <div class="border-top">
    <div class="maintitle px-4 mt-3">
      <h1>Reporte de actividades</h1>
    </div>
    <div class="modal" tabindex="-1" id="activityModal" data-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit.prevent="processcrud()" novalidate>
            <div class="modal-header">
              <h5 class="modal-title">{{ opccrud }} de Actividades</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                v-on:click="resetcrud()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="total-row form-group">
                  <label for="title">Nombre de la actividad:</label>
                  <input v-model="newReport.title" class="form-control shadow-none" type="text" id="title" required>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="description">Descripción de la actividad:</label>
                  <textarea v-model="newReport.description" id="description" class="form-control shadow-none" required></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="date">Fecha en que se realiza:</label>
                    <b-form-datepicker placeholder="" :min="min" :max="max" v-model="newReport.date" class="form-control shadow-none"
                      :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }" locale="es"
                      id="date"></b-form-datepicker>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="time">Duración en horas:</label>
                    <input type="number" v-model="newReport.hours" class="form-control shadow-none" id="time" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="project">Nombre del proyecto:</label>
                  <vue-bootstrap-autocomplete v-model="newReport.project" class="shadow-none" showAllResults="true" :minMatchingChars="1" inputClass="shadow-none" id="project" :data="projectlist" />
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="stage">Seleccione una etapa:</label>
                  <select v-model="newReport.stage" class="form-select shadow-none" aria-label="Default select example" id="stage"
                    required>
                    <option v-for="stage in stagelist">{{ stage }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                @click="resetcrud()">Cerrar</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="processcrud()">Guardar</button>
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
          <input class="form-control me-2 shadow-none" type="search" aria-label="Search">
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
            <td>{{ report.project }}</td>
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
      actualReport: NaN,
      newReport: {
        title: "",
        description: "",
        date: today,
        hours: "",
        project: "",
        stage: ""
      },
      min: mindate,
      max: today,
      opccrud: "",
      reportlist: this.$parent.reportlist,
      stagelist: this.$parent.stageslist,
      pageitemlist: this.$parent.pageitemlist,
      projectlist: this.$parent.projectlist
    }
  },
  methods: {
    deletereport(report) {
      this.reportlist.splice(this.reportlist.indexOf(report), 1);
    },
    datedit(report) {
      this.opccrud = 'Modificación';
      this.newReport = {...report};
      this.actualReport = this.reportlist.indexOf(report);
    },
    resetcrud() {
      this.newReport = {
        title: "",
        description: "",
        date: "",
        hours: "",
        project: "",
        stage: ""
      };
      this.actualReport = NaN;
    },
    processcrud() {
      if(this.$refs.form.checkValidity()){
        if (this.opccrud == "Creación") {
          this.reportlist.push({...this.newReport});
        } else if (this.opccrud == "Modificación") {
          this.reportlist[this.actualReport] = {...this.newReport};
        }
        this.resetcrud();
      }
      else{
        alert("Por verifique los datos del formulario")
      }
    }
      
  }
}
</script>

<style>
form input:invalid,
form textarea:invalid{
  border-color:#ff0039  ;
}

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
</style>