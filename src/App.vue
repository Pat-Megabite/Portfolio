<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <div class='d-flex flex-column' id="app">
    <MainHeader/>
    <RouterView id="content"/>
    <MainFooter id="footer"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
#app {
  width: 100%;
  min-height: 100vh;
}
#footer {
  width: 100%; 
}
#content {
  flex-grow: 2;
}
</style>
