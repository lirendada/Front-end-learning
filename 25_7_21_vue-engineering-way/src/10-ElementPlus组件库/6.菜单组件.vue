<template>
    <h5 class="mb-2">Custom colors</h5>
    <!--
        菜单外层盒子：
        text-color: 文字颜色
        active-text-color: 激活菜单项的文本颜色
        background-color: 菜单的背景颜色
        default-active: 页面加载时默认激活菜单的 index
        class: 自定义类名
    -->
    <el-menu
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    >
        <!-- 二级导航，使用el-sub-menu -->
        <el-sub-menu index="1">
            <!-- 通过template来设置一级导航的标题 -->
            <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
            </template>

            <!-- 通过el-menu-item-group进行分组 -->
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>

            <!-- 嵌套二级导航 -->
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>

        <!-- 一级导航使用el-menu-item -->
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
        
        <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
    import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
</script>

<style>
    .el-menu {
        width: 300px;
    }
</style>