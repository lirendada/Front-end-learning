<template>
<div @click="divClick">
    <!-- prevent：阻止默认行为（如链接跳转） -->
    <a href="https://baidu.com" @click.prevent.stop>点击跳转到百度</a>

    <!-- stop：阻止冒泡行为，即阻止当前标签向上层传递 -->
    <p @click.stop="pClick"></p>
</div>
</template>

<script setup>
    const pClick = () => {
        console.log('pClick');
    }

    const divClick = () => {
        console.log('divClick');
    }
</script>

<style scoped>
    div {
        width: 400px;
        height: 200px;
        background: plum;
    }
    div a {
        display: block;
        width: 100px;
        text-decoration: none;
        background: tomato;
        text-align: center;
        color: #fff;
    }
    div p {
        width: 200px;
        height: 100px;
        background: rebeccapurple;
    }
</style>