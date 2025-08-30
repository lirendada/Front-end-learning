<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router'
  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      // 字符串形式
      // router.push('/friend')

      // 对象形式：path属性
      // router.push({
      //   path: '/friend'
      // })

      // 对象形式：name属性
      // router.push({
      //   name: 'Friend'
      // })

      router.push({
        name: 'Friend',
        params: {
            fid: 105
        }
      })
    }, 2000)
  })
  
</script>
<template>
  <div class="find">
    <p>发现音乐</p>
    <p>发现音乐</p>
    <p>发现音乐...</p>
  </div>
</template>
<style scoped></style>