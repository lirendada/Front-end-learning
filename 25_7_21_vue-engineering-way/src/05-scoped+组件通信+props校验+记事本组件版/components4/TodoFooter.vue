<script setup>
import { computed } from 'vue';

    const props = defineProps({
        todoList: {
            type: Array,
            default: () => []   // 默认为空数组，这里需要用函数来表示
        }
    })

    // 计算剩下的任务数量
    const left_num = computed(() => {
        return props.todoList.filter((item) => !item.finished).length
    })

    const emit = defineEmits()

    // 删除所有完成的任务
    const removeAll = () => {
        emit('removeAllToggle')
    }
</script>

<template>
    <footer class="footer">
        <span class="todo-count"><strong>{{ left_num }}</strong> item left</span>
        <ul class="filters">
            <li>
                <a href="#/" class="selected">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed" @click="removeAll">
            Clear completed
        </button>
    </footer>
</template>