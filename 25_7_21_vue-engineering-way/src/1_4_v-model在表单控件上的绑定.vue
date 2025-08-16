<template>
<div>
    <!-- 输入框 -->
    请输入内容：<input type="text" v-model="text"></input>
    <br><br>

    <!-- 文本域 -->
    <textarea cols="30" rows="4" v-model="intro" placeholder="请输入自我介绍"></textarea>
    <br><br>

    <!-- 下拉菜单：根据value进行绑定 -->
    <select v-model="select">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
    </select>
    <br><br>

    <!-- 单选框：根据value进行绑定 -->
    <input type="radio" value="A" v-model="radio">A</input>
    <input type="radio" value="B" v-model="radio">B</input>
    <input type="radio" value="C" v-model="radio">C</input>
    <input type="radio" value="D" v-model="radio">D</input>
    <br>
    <input type="radio" value="E" v-model="radio">E</input>
    <input type="radio" value="F" v-model="radio">F</input>
    <input type="radio" value="G" v-model="radio">G</input>
    <input type="radio" value="H" v-model="radio">H</input>
    <br><br>

    <!-- 复选框：一个复选框时候绑定一个变量，多个变量时候绑定一个数组 -->
    <input type="checkbox" v-model="single">一个复选框</input>
    <br><br>

    <input type="checkbox" v-model="multi" value="q">多个复选框</input>
    <input type="checkbox" v-model="multi" value="w">多个复选框</input>
    <input type="checkbox" v-model="multi" value="e">多个复选框</input>
    <input type="checkbox" v-model="multi" value="r">多个复选框</input>
    <br><br>


    <!-- 下面是好奇进行测试的内容 -->
    <input type="color" v-model="color"></input>
    <input type="date" v-model="date"></input>
    <input type="datetime-local"></input>
    <input type="email"></input>
    <input type="image" src="../../../PM/lottery_system/src/main/resources/static/favicon.ico"></input>
</div>
</template>

<script setup>
    import {ref} from 'vue'

    const text = ref('');

    const intro = ref('');

    const select = ref('b');

    const radio = ref('A');

    const single = ref('');

    const multi = ref([]);

    const color = ref();
    const date = ref();
</script>

<style scoped>

</style> 