<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: [
        'Ermenejildo',
        'Aventañado'
      ],
      reports: [
        {
          title: "PAD1042",
          description: "Se crea PAD para cargue masivo al archivo siil60b",
          date: "04/09/2023",
          hours: 4,
          projectname: "Cargos Fijos - Consulta de cupos",
          stage: "Desarrollo"
        },
        {
          title: "PAD1043",
          description: "Se crea PAD para cargue masivo al archivo siil60g",
          date: "05/09/2023",
          hours: 4,
          projectname: "Cargos Fijos - Consulta de cupos",
          stage: "sDesarrollo"
        }
      ],
      pageitems: [1, 2],
      notifications: [
        "Se ha",
        "Te han"
      ],
      stages: [
        "Desarrollo",
        "Pruebas",
        "Hecho"
      ]
    }
  }
}
</script>

<style>
#app {
  isolation: isolate;
  width: 100vw;
  height: 100vh;
}

#app>div {
  width: 100%;
  height: 100%;
}
</style>
