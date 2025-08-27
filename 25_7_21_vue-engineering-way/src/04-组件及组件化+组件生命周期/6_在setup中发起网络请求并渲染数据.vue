<!-- @format -->

<script setup>
	// 安装 axios
	// 导入模块
	// 定义请求函数并调用
	import axios from 'axios'
	import { ref } from 'vue'
	const i = ref(0)

	// 图片列表
	const images = ref([])

	getBannerData()

	async function getBannerData() {
		// 发请求，调接口
		const resp = await axios({
			method: 'GET', // 请求方式
			url: 'http://localhost:4000/api/banner' // 请求路径
		})
		// 保存数据
        console.log(resp);
        
		images.value = resp.data.data
	}
	const prev = () => {
		i.value--
		if (i.value <= -1) {
			i.value = images.value.length - 1
		}
	}

	const next = () => {
		i.value++
		if (i.value >= images.value.length) {
			i.value = 0
		}
	}

	let timer = null

	const play = () => {
		timer = setInterval(() => {
			next()
		}, 3000)
	}

	play()

	const stop = () => {
		clearInterval(timer)
	}
</script>

<template>
	<div
		class="banner"
		@mouseenter="stop"
		@mouseleave="play">
		<ul>
			<li
				v-for="(url, index) in images"
				:class="{ active: index === i }">
				<img :src="url" />
			</li>
		</ul>
		<div class="indicator">
			<span
				v-for="(n, index) in images.length"
				:key="n"
				:class="{ active: index === i }"
				@click="i = index">
			</span>
		</div>
		<div class="ctrl">
			<a
				href="javascript:;"
				class="btn prev"
				@click="prev"
				>&lt;</a
			><a
				href="javascript:;"
				class="btn next"
				@click="next"
				>&gt;</a
			>
		</div>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		color: #000;
	}

	.banner {
		position: relative;
		width: 1200px;
		height: 337px;
		margin: 150px auto;
	}
	.banner ul {
		width: 100%;
		height: 100%;
		list-style: none;
	}

	.banner ul li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 1s;
	}
	.banner ul li.active {
		opacity: 1;
	}

	.banner .indicator {
		display: flex;
		justify-content: center;
		position: absolute;
		left: 0;
		bottom: 20px;
		width: 100%;
	}

	.banner .indicator span {
		width: 30px;
		height: 2px;
		margin: 0 5px;
		cursor: pointer;
		background: rgba(255, 2555, 255, 0.6);
	}
	.banner .indicator span.active {
		background: rgba(255, 255, 255, 1);
	}
	.btn {
		position: absolute;
		top: 50%;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-top: -15px;
		font-size: 14px;
		text-align: center;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		border-radius: 50%;
	}
	.btn.prev {
		left: 15px;
	}
	.btn.next {
		right: 15px;
	}
</style>
