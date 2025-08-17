<template>
<div>
    <!-- 不使用对象的方式操作style -->
    <p :style="{color: sty}">style1</p>

    <!-- 使用对象的方式操作style -->
    <p :style="styObj">style2</p>
</div>
</template>

<script setup>
    import {ref} from 'vue';

    const sty = ref('red');

    const styObj = ref({
        'color': 'blue',
        'background-color': 'green'
    })
</script>

<style scoped>

</style>