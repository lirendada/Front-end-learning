<template>
<ul>
    <li v-for="item, index in tabs" :key="item.id">
        <a href="#" 
        :class="{active : activeIndex === index}"
        @click="activeIndex = index">
            {{ item.name }}
        </a>
    </li>
</ul>
</template>

<script setup>
    import {ref} from 'vue'
    const tabs = [
        {'id':1, 'name':'京东秒杀'},
        {'id':2, 'name':'每日特价'},
        {'id':3, 'name':'品类秒杀'}
    ]
    const activeIndex = ref(0);
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    ul {
        display: flex;
        border-bottom: 2px solid #e01222;
        padding: 0 10px;
    }

    ul li {
        width: 100px;
        height: 50px;
        line-height: 50px;
        list-style: none;
        text-align: center;
        padding: 0 10px
    }

    ul li a {
        text-decoration: none; 
        color: #333333;
        display: block;
        font-weight: bold;
    }

    ul li a.active {
        background-color: red;
        color: #fff
    }
</style>