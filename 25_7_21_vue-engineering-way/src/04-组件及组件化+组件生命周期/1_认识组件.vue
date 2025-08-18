<script setup>
    import MyPanel from './components/MyPanel.vue';
</script>

<template>
  <h3>可折叠面板</h3>
  <MyPanel></MyPanel>
  <MyPanel></MyPanel>
  <MyPanel></MyPanel>
</template>

<style lang="scss">
body {
  background-color: #ccc;
}

#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid green;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}

#app h3 {
  text-align: center;
}


</style>