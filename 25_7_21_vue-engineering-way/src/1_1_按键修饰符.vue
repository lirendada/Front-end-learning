<template>
    <div>
        <input type="input" @keydown.enter="onKeyDown"></input>
        <input type="input" @keyup="upKeyDown"></input>
        <input type="input" @keypress="pressKeyDown"></input>
    </div>
</template>

<script setup>
    const onKeyDown = () => {
        console.log('onKeyDown');
    }

    const upKeyDown = () => {
        console.log('upKeyDown');
    }

    const pressKeyDown = () => {
        console.log('pressKeyDown');
    }
</script>

<style scoped>

</style>