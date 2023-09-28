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
          description: "Se crea PAD para cargue masivo al archivo SIIL60G",
          date: "2023-12-04",
          hours: 4,
          project: "Desembolsos digitales - Consulta de cupos",
          stage: "Desarrollo"
        },
        {
          title: "PAD1043",
          description: "Se crea PAD para cargue masivo al archivo SIIL60G",
          date: "2023-09-04",
          hours: 4,
          project: "Cargos Fijos - Consulta de cupos",
          stage: "Desarrollo"
        }
      ],
      pageitems: [1, 2],
      notifications: [
      ],
      stages: [
        "Desarrollo",
        "Pruebas",
        "Hecho"
      ],
      projects: [
        "Ampliación de cargos fijos",
        "Desembolsos digitales - VMA",
        "Desembolsos digitales - Consulta de cupos"
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
