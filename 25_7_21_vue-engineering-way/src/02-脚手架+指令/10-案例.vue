<template>
    <section clsss="todoapp">
        <header class="header">
            <h1>记事本</h1>
            <input placeholder="请输入任务" class="new-todo" v-model="inputMsg" @keydown.enter="add"/>
            <button class="add" @click="add">添加任务</button>
        </header>
        <section class="main">
            <ul class="todo-list">
                <li class="todo" v-for="item, index in todoList" :key="item.id">
                    <div class="view">
                        <span class="index">{{ index+1 }}.</span> <label>{{ item.name }}</label>
                        <button class="destroy" @click="del(index)"></button>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">合 计: <strong> {{ todoList.length }} </strong></span>
            <button class="clear-completed" @click="delAll">清空任务</button>
        </footer>
    </section>
</template>

<script setup>
    import './styles/index.css'

    import {ref} from 'vue'
    
    // 代办任务列表
    const todoList = ref([
        { id: 321, name: '吃饭', finished: false },
        { id: 666, name: '睡觉', finished: true },
        { id: 195, name: '打豆豆', finished: false }
    ]);

    const del = (index) => {
        if(window.confirm("确认删除吗？")) {
            todoList.value.splice(index, 1);
        }
    }

    const delAll = () => {
        if(window.confirm("确认删除吗？")) {
            todoList.value.splice(0, todoList.value.length)
        }
    }

    const inputMsg = ref("");

    const add = () => {
        // 去除首尾空格
        const name = inputMsg.value.trim();
        // 非空校验
        if(name.length === 0) {
            return alert("名称不能为空！");
        }
        // 添加到数组尾部
        todoList.value.push({
            id: Date.now(),
            name: name,
            finished: false
        })
        // 清空输入框
        inputMsg.value = "";
    }
</script>