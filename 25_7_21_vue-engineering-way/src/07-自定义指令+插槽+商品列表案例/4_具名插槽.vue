<template>
    <my-dialog></my-dialog>

    <my-dialog>
        <template v-slot:header>
            <h3>友情提示</h3>
        </template>

        <template #content>
            <p>请输入正确的手机号</p>
        </template>
    </my-dialog>
</template>

<script setup>
    import MyDialog from './components4/MyDialog.vue';
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>