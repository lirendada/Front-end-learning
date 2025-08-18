<template>
  <my-header></my-header>
  <my-main></my-main>
  <my-footer></my-footer>
</template>

<script setup>
    import MyHeader from './components2/MyHeader.vue';
    import MyMain from './components2/MyMain.vue';
    import MyFooter from './components2/MyFooter.vue';
</script>

<style>
* {
  margin: 0;
}

#app {
  height: 100vh;
  padding: 10px;
  background: skyblue;
  font-size: 30px;
  color: #fff;
  text-align: center;
}
</style>