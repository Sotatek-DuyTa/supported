<template>
  <div id="app">
    <h3 class="app__title">
      Danh Mục Sản Phẩm
    </h3>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .app__title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
