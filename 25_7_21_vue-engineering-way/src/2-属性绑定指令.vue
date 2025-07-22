<template>
    <a v-bind:href="url">百度一下</a><br>
    <a :href="url">百度一下</a>

    <img :src="imgUrl">

    <!-- 不简写 -->
	<div v-bind:title="msg">
		{{ msg }}
	</div>

	<!-- 简写 -->
	<div :title="msg">
		{{ msg }}
	</div>
</template>

<script setup>
    import { ref } from 'vue'
    const msg = ref('Hello Vue3+Vite')
    const url = ref('http://www.baidu.com');
    const imgUrl = ref(
		'https://www.trjcn.com/upfile/investors/20190325/thumb_1553507210.7143.jpg'
	)
</script>

<style scoped>

</style>