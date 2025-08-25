<script setup>
import { nextTick, ref } from 'vue';

    const tag = defineModel()

    const isEdit = ref(false)
    const input_ref = ref(null)
    const inputText = ref('')

    const changeStatus = () => {
        isEdit.value = true
        if(isEdit.value === true) {
            nextTick(() => {
                input_ref.value.focus()
            })
        }
    }

    const updateTag = () => {
        if(inputText.value) {
            tag.value = inputText.value
            inputText.value = ''
        }
        isEdit.value = false
    }
</script>

<template>
    <div class="my-tag">
        <input class="input" type="text" placeholder="输入标签" 
            ref="input_ref"
            v-if="isEdit" 
            v-model.trim="inputText" 
            @keyup.enter="updateTag"
        />
        <div class="text" @dblclick="changeStatus" v-else>
            {{ tag }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-tag {
    cursor: pointer;
    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>