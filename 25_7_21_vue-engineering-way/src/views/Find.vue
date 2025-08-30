<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router'
  import Recommend from './Recommend.vue';
  import Ranking from './Ranking.vue';
  import SongList from './SongList.vue';
  const router = useRouter()

  // onMounted(() => {
  //   setTimeout(() => {
  //     // 字符串形式
  //     // router.push('/friend')

  //     // 对象形式：path属性
  //     // router.push({
  //     //   path: '/friend'
  //     // })

  //     // 对象形式：name属性
  //     // router.push({
  //     //   name: 'Friend'
  //     // })

  //     router.push({
  //       name: 'Friend',
  //       params: {
  //           fid: 105
  //       }
  //     })
  //   }, 2000)
  // })


  
</script>
<template>
  <div class="find">
    <router-link to="/find/recommend">推荐</router-link>
    <router-link to="/find/ranking">排行榜</router-link>
    <router-link to="/find/songList">歌单</router-link>

    <router-view></router-view>
  </div>
</template>
<style></style>