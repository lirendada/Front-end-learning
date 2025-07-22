<template>
<div>
    <button @click="index--" v-if="index > 0">上一页</button>
    <img :src="imgList[index]">
    <button @click="index++" v-if="index < imgList.length - 1">下一页</button>
</div>
</template>

<script setup>
    // 图片列表
    const imgList = [
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-00.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-01.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-02.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-03.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-04.png',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-05.png'
    ]

    import {ref} from 'vue';
    const index = ref(0);
</script>

<style>
    #app {
        display: flex;
        width: 500px;
        height: 240px;
    }

    img {
        width: 240px;
        height: 240px;
    }

    #app div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>