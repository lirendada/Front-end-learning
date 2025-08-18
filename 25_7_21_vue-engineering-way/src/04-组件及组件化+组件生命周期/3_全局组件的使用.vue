<template>
  <my-main></my-main>
  <my-header></my-header>
  <my-footer></my-footer>
</template>

<script setup>
    import MyHeader from './components3/MyHeader.vue';
    import MyMain from './components3/MyMain.vue';
    import MyFooter from './components3/MyFooter.vue';
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