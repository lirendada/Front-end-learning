<script setup>
    const props = defineProps({
        todoList: {
            type: Array,
            default: () => []   // 默认为空数组，这里需要用函数来表示
        }
    })

    const emit = defineEmits();

    const onClear = (index) => {
        emit('removeToggle', index)
    }
</script>

<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>

        <ul class="todo-list" >
            <li v-for="(item, index) in props.todoList" :key="item.id" :class="{completed: item.finished}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.finished"/>
                    <label>{{ item.name }}</label>
                    <button class="destroy" @click="onClear(index)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>