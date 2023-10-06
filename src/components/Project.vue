<template>
  <div class="border-top">
    <div class="maintitle px-4 mt-3">
      <h1>Modulo de proyectos</h1>
    </div>
    <div class="modal" tabindex="-1" id="projectModal" data-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <form v-on:click.prevent="{ }" novalidate>
            <div class="modal-header">
              <h5 class="modal-title">{{ opccrud }} de Proyectos</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                v-on:click="resetcrud()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="total-row form-group">
                  <label for="projectid">Número del proyecto:</label>
                  <input v-model="newProject.projectid" class="form-control shadow-none" type="text" id="projectid"
                    required>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="project">Nombre del proyecto:</label>
                  <input type="text" class="form-control shadow-none" v-model="newProject.project" id="project">
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="labdate">Fecha de laboratorio:</label>
                    <b-form-datepicker placeholder="" :min="min" v-model="newProject.labdate"
                      class="form-control shadow-none"
                      :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }" locale="es"
                      id="labdate"></b-form-datepicker>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="prodate">Fecha producción:</label>
                    <b-form-datepicker placeholder="" :min="min" v-model="newProject.prodate"
                      class="form-control shadow-none"
                      :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }" locale="es"
                      id="prodate"></b-form-datepicker>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="source">Fuente de desarrollo:</label>
                  <input type="text" id="source" v-model="newProject.source" class="form-control shadow-none">
                </div>
              </div>
              <div class="row">
                <div class="total-row form-group">
                  <label for="status">Etapa del proyecto:</label>
                  <select v-model="newProject.status" class="form-select shadow-none" aria-label="Default select example"
                    id="status" required>
                    <option v-for="stage in projectstages">{{ stage }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                v-on:click="resetcrud()">Cerrar</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                v-on:click="processcrud()">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="left-options">
        <button type="submit" class="btn btn-primary btn-create" data-bs-toggle="modal" data-bs-target="#projectModal"
          v-on:click="opccrud = 'Creación'">
          <i class="fa-solid fa-plus"></i> Crear Proyecto
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
            <th scope="col">N&uacute;mero de proyecto</th>
            <th scope="col">Nombre del proyecto</th>
            <th scope="col">Fecha laboratorio</th>
            <th scope="col">Fecha producci&oacute;n</th>
            <th scope="col">Fuente</th>
            <th scope="col">Estado del proyecto</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projectlist">
            <td>{{ project.projectid }}</td>
            <td>{{ project.project }}</td>
            <td>{{ project.labdate }}</td>
            <td>{{ project.prodate }}</td>
            <td>{{ project.source }}</td>
            <td>{{ project.status }}</td>
            <td><a href="#" data-bs-toggle="modal" data-bs-target="#projectModal" v-on:click.prevent="datedit(project)">
                <i class="fa-solid fa-pen"></i>
              </a></td>
            <td><a href="#" v-on:click.prevent="deleteproject(project)">
                <i class="fa-solid fa-trash"></i>
              </a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav v-if="projectlist.length > 0 && pageitemlist.length > 0" class="pagination-nav">
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
  name: "Project",
  data() {
    const today = new Date();
    const mindate = new Date(today);
    mindate.setDate(mindate.getDate() - 3);
    return {
      actualProject: NaN,
      newProject: {
        projectid: "",
        project: "",
        labdate: "",
        prodate: "",
        source: "",
        status: "",
      },
      min: mindate,
      opccrud: "",
      projectlist: this.$parent.projects,
      projectstages: this.$parent.projectstages,
      pageitemlist: this.$parent.pageitemlist
    }
  },
  methods: {
    deleteproject(project) {
      this.projectlist.splice(this.projectlist.indexOf(project), 1);
    },
    datedit(project) {
      this.opccrud = 'Modificación';
      this.newProject = { ...project };
      this.actualProject = this.projectlist.indexOf(project);
    },
    resetcrud() {
      this.newProject = {
        projectid: "",
        description: "",
        date: "",
        hour: "",
        project: "",
        stage: ""
      };
      this.actualProject = NaN;
    },
    processcrud() {
      if (this.opccrud == "Creación") {
        this.projectlist.push({ ...this.newProject });
      } else if (this.opccrud == "Modificación") {
        this.projectlist[this.actualProject] = { ...this.newProject };
      }
      this.resetcrud();
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
</style>