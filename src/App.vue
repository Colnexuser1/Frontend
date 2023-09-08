<template>
  <div id="app">
    <router-view />
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

#app>div {
  width: 100%;
  height: 100%;
}
</style>
