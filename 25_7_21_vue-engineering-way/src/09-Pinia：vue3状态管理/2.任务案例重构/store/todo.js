import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useTodoStore = defineStore('todo', () => {
    const TYPE = {
        ALL: 'all',
        DONE: 'done',
        UNDONE: 'undone'
    }
    
    // 任务数组
    const todoLists = ref([
        { id: 1, text: '买书', finished: false },
        { id: 2, text: '健身', finished: true },
        { id: 3, text: '吃鸡', finished: false }
    ])

    // 是否全都完成了
    const isAllCompleted = computed({
        get() {
            return todoLists.value.every(item => item.finished)
        },
        set(flag) {
            transFlag(flag)
        }
    })

    // 剩余未完成的任务
    const unfinishedLists = computed(() => {
        return todoLists.value.filter(item => item.finished === false)
    })

    // 基于所选selectType实时渲染的任务数组
    const showLists = computed(() => {
        if(selectType.value === TYPE.ALL) {
            return todoLists.value
        } else if(selectType.value === TYPE.UNDONE) {
            return unfinishedLists.value
        } else {
            return todoLists.value.filter(item => item.finished === true)
        }
    })

    const selectType = ref(TYPE.ALL)

    // 添加任务
    const addWork = (text) => {
        todoLists.value.push({
            id: Date.now(),
            text,
            finished: false
        })
    }

    // 删除任务
    const delWork = (index) => {
        if(window.confirm('确认删除吗？')) {
            todoLists.value.splice(index, 1)
        }
    }

    // 删除所有完成的任务
    const delCompletedWork = () => {
        if(window.confirm('确认删除所有完成的任务？')) {
            todoLists.value = todoLists.value.filter(item => item.finished === false)
        }
    }

    // 改变任务状态
    const transFlag = (flag) => {
        todoLists.value.forEach((item) => {item.finished = flag})
    }

    return {
        todoLists,
        isAllCompleted,
        unfinishedLists,
        TYPE,
        selectType,
        showLists,
        addWork,
        delWork,
        delCompletedWork
    }
})