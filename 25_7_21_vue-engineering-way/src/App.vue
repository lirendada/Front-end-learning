<template>
<div>
    <nav>
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friend">朋友</router-link>

        <!-- 声明式导航传参 -->

        <!-- 查询参数传参：字符串传参 -->
        <!-- <router-link to="/friend?id=10086">朋友</router-link> -->

        <!-- 查询参数传参：对象传参 -->
        <!-- <router-link :to="{
            path: '/friend',
            query: {
                id: 10086
            }
        }"> 朋友 </router-link> -->

        <!-- 动态路由传参：字符串传参 -->
        <!-- <router-link to="/friend/10086">朋友</router-link> -->

        <!-- 动态路由传参：对象传参 -->
        <!-- <router-link :to="{
            name: 'Friend',
            params: {
                fid: 10086
            }
        }">朋友</router-link> -->
    </nav>

    <router-view></router-view>
</div>
</template>

<script setup>
    
</script>

<style>
nav a {
  color: #333;
  text-decoration: none;
}
nav a:nth-child(2) {
  margin: 0 80px;
}
nav a.router-link-active {
  background: red;
  color: #fff;
}
</style>