<template>
<div>
    <span>{{ text }}</span>
    <button @click="edit">编辑</button>
</div>
<div v-if="isInput">
    <input type="text" ref="input_ref" v-model="input_text"></input>
    <button @click="text = input_text; isInput = !isInput">确认</button>
</div>
</template>

<script setup>
    import { nextTick, ref } from 'vue';

    const text = ref('大标题')

    const isInput = ref(false) // true表示显示输入框
    const input_text = ref('')

    const input_ref = ref(null)

    const edit = () => {
        isInput.value = !isInput.value;

        if(isInput.value === true) {
            // 完成输入框的聚焦
            nextTick(() => {
                input_ref.value.focus()
            })
        }
    }
</script>

<style scoped>

</style>