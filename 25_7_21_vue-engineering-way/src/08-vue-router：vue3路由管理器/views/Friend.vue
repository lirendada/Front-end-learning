<script setup>
  import {useRoute} from 'vue-router'
  const route = useRoute()
  console.log(route);
</script>
<template>
  <div class="friend">
    <p>朋友</p>
    <p>朋友</p>
    <p>朋友...</p>
    <!-- <p>接收到参数：{{ route.query.id }}</p> -->
    <p>接收到参数：{{ route.params.fid }}</p>
  </div>
</template>
<style scoped></style>